# EXHIBITS 1 — sealed media exhibits: selective disclosure over a data-pile

**Labels:** exhibits, data-pile, journal
**Status:** proto-issue — design settled, nothing built. Drain by doing the work below.

A journal piece wants to publish a recording it is **not willing to publish whole**: feature a
quoted passage, keep the rest sealed, and still attest to the rest. Today the only shape available
is the whole file (`journal/autumn-ryan/precision-security/audio.html` — a piece-local `<audio>`
embed, deliberately not an engine include). This document is the general capability that embed is
the degenerate case of.

## Context a cold agent needs (do not re-derive)

Every claim in this section was measured, not reasoned. Re-measure before contradicting.

### The media half — chunking is lossless

Cutting an `.m4a` into fMP4 chunks with `ffmpeg -c:a copy` (**no re-encode**) and reassembling all
of them reproduces the original's packet stream exactly — verified `MD5=2a1bfe4615ee1af2ea8a2b44a5d6a186`
on both, for a 15:16 / 15MB voice memo. A 60-second excerpt built from 8 of 93 chunks carries 3,281
AAC packets **byte-identical** to the original's packets in that window.

This is what lets the ethos claim survive: an excerpt is not an edit. It is *fewer of the same
bytes*. Nothing is transcoded, so no metadata is disturbed beyond the container.

- **An excerpt self-reports its position.** `ffprobe` on the 5:00–6:00 excerpt gives
  `start_time=290.005333`. The fragment's `tfdt` carries where it came from, so a quote cannot be
  laundered into a different part of the recording.
- **The init segment is a hard dependency.** A media chunk without it fails with
  `trun track id unknown, no tfhd was found`. It is 766 bytes and is always disclosed (seq 0).
- **Container overhead is negative.** Even 2-second chunks total ~1% *smaller* than the source
  `.m4a` (the m4a's index/metadata exceeds the per-fragment cost). Fine chunking is free in bytes.
- **Chunk size is a quote-granularity choice, not a size choice.** For a 51:51 recording:
  2s → 1,558 chunks (~400KB manifest); 5s → 624 (~170KB); 10s → 312. **5s is the suggested
  default** — tight enough not to distort a sentence, manifest still shippable.

### The crypto half — the drop channel already does this

`data-pile bin/drop-pack` encrypts each artifact under its **own random key** with its own
`ratchet_pub` commitment; revealing one block's key derives nothing about any other. `bin/prove`
already understands that shape. Chunks map onto blocks 1:1 with no new cryptography (invariant #8).

Use the **drop** shape, never the ratchet: the ratchet's disclosure is forward-only (`seq >= N`),
which cannot express an interior quote.

Verified end-to-end against the real `feed-open.mjs` (the WebCrypto/browser path): a manifest
verifies **key-lessly** (93 blocks chained, digest matched), 8 blocks were disclosed, every revealed
key matched its published commitment, and the undisclosed blocks stayed sealed with their
commitments public.

- **AES-CTR is unauthenticated.** Integrity comes from the manifest's `this_hash` over ciphertext.
  The player MUST check `this_hash` *before* decrypting or a tampered chunk decrypts to plausible
  garbage. `verifyFeed` already does this; in the player it is not optional.
- **This is selective disclosure, not playback control.** A published chunk key is public forever,
  and the ciphertext is served with `access-control-allow-origin: *`. The strong property is the
  other direction: undisclosed parts are cryptographically unavailable while remaining attestable.
  Do not market it as DRM — that oversells one direction and undersells the one that matters.
- **Chunk boundaries leak.** Disclosure is quantized to the chunk grid, and the *pattern* of what
  was disclosed is public. Both are acceptable: they are the metadata the ethos says to keep.

### Liveness is the notary — one pile per journal, not per piece

The manifest chains `prev_hash` → `this_hash` and the head signs the **whole** entries array. So
sealing anything after block N re-signs a chain containing N: **every later seal re-notarizes
everything earlier.** A continuously appended pile witnesses its own past; a per-piece pile that
goes quiet has a chain of length 1 and proves only what its own signature timestamp claims.

Therefore the pile binds to the **journal** (a `cite-*` citation repository), not to a piece. An
**ejected** piece carries its chunks, its keys, and a manifest slice, and points back at the origin
pile — whose chain keeps growing after ejection. The ejected piece therefore gets *stronger over
time without doing anything*. That backlink is the lease, and it is mechanical rather than social.

### The hosting half — measured, 2026-09-01

`raw.githubusercontent.com` **cannot be framed and cannot serve a document**:

```
content-type: text/plain; charset=utf-8      x-frame-options: deny
x-content-type-options: nosniff              content-security-policy: default-src 'none'; sandbox
access-control-allow-origin: *               cache-control: max-age=300
```

GitHub already serves raw pre-inerted. But `access-control-allow-origin: *` means **`fetch()` from
raw works from any origin**. So raw is a legitimate *byte* source and never a *document* source.

A constellation Pages origin answers `content-type: text/html`, `access-control-allow-origin: *`,
`cache-control: max-age=600`, `server: cloudflare`, and **no** `x-frame-options` — so Pages can host
the player and can be framed.

- **`frame-ancestors` is not available.** Pages sets no custom headers, and `frame-ancestors` is
  ignored in a `<meta>` CSP by spec. There is no header defense against hostile framing.
- **The framing threat is misattribution, not theft.** Chunks and keys are public static files; a
  hostile framer gains nothing it could not fetch directly. What it could do is frame the player to
  imply the journal said something it did not — answered by the signed manifest and the fragment's
  self-reported `start_time`, not by a header. Keep the probe-line origin check
  (`probe-line-v1.md` §2), but never describe it as a confidentiality boundary.

## The shape

**Three roles, each with one job. The pile is never talked to at runtime.**

| | what it is | when |
| --- | --- | --- |
| **data-pile** | ciphertext chunks, signed manifest, disclosure bundles | static; pure GET, cache forever |
| **Tell** | *"there is a newer head"* — a pointer, never a payload | live, tiny |
| **probe line** | player fragment ↔ host page, on device | local; not a network protocol here |

The redacted chain is a **build artifact**. `bin/prove --seqs` writes it once at publish time and it
is committed. Nothing recomputes a disclosure per reader.

**The manifest is the request vocabulary.** Chunk identity is `this_hash` — a sha256, not a URL — so
a request for a chunk is a request for a hash, and any responder can answer it because the manifest
validates the answer regardless of origin. That is invariant #2 applied to media, and it is what
makes DNS one transport among several (Tell, Atlas, a peer, the QR carrier) rather than the answer.

**Ship the map with the page; ship chunks lazily.** A reader holding only the initial page still
renders the *whole* timeline — dark and lit — and knows exactly which hashes are missing. The
degraded state is honest rather than broken.

**One player per journal, at the journal root.** Not one per piece, and not inside a piece's
`exhibits/`. A single origin is a single trust decision; N per-piece players would each have to be
trusted separately. Exhibits eject to the piece; the player never does.

## Do

- [ ] `data-pile`: generalize `bin/prove --from N` to `--seqs 41-58,102-107`. Small — drop blocks are
      already independent; only the bundle's seq selection changes. Mirror in `prove.mjs`.
- [ ] `data-pile`: `bin/media-pack` — segment (`-c:a copy`, refuse a re-encode), seal each chunk as a
      drop block, emit the map. Assert the reassembly hash matches the source before sealing.
- [ ] **The map block**: seq 0 of a payload, disclosed at pack time, describing the chunk↔time grid.
      Generic concept — *"a block may be self-describing and disclosed at pack time"* — so the pile
      learns nothing about audio and stays opaque (invariant #3). Audio is one schema riding in it.
- [ ] `journal.anecdote.channel`: the player fragment + an engine include. Must verify `this_hash`
      before decrypt; must gap-jump (MSE **stalls** at a hole in the buffered ranges rather than
      skipping — the playhead needs a watchdog that seeks to the next buffered start). *Not verified
      in a browser; this is MSE semantics, confirm on the first build.*
- [ ] Forced alignment for follow-along. Note this is **alignment, not transcription** — the
      transcripts already exist and the phone's words are the record; only timings are added. No
      whisper.cpp / mlx-whisper present on the author's machine as of 2026-09-01.

## Open

- **Tell's freshness message.** Shape of *"there is a newer head"* is unspecified. It is the only
  live fact in the system, so it should stay a pointer; resist letting payload into it.
- **Manifest vs. map split at scale.** Rendering needs the map; verifying needs the full entries
  array (~170KB at 5s for a 51-minute recording). Whether the map ships inline per piece or is
  fetched is unsettled.
- **Ejected-piece manifest slice.** An ejected piece needs enough of the chain to verify its own
  chunks without the whole journal's manifest. The slice's shape — and whether a partial chain can
  verify against the signed head at all — is not designed.
- **Player origin for an ejected piece.** It points back at the origin journal's player; what a
  reader sees when that origin is gone is undecided (the §N derelict-node question, in miniature).
