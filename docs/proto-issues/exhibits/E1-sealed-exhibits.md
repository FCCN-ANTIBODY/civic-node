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

Of `raw.githubusercontent.com`'s headers, **exactly one matters**, and it is the permissive one:

```
access-control-allow-origin: *                ← the load-bearing line: fetch() works from anywhere
content-type: text/plain; charset=utf-8       x-frame-options: deny
x-content-type-options: nosniff               content-security-policy: default-src 'none'; sandbox
cache-control: max-age=300
```

**Raw is a byte source, and that is all it was ever needed for.** The offline origin does not ask
the browser to render repository source — `jekyll-enough/build.mjs` does, over an in-memory
`path -> content` tree, which is the standing promise that *the bytes are enough*. GitHub serving
raw pre-inerted is therefore **aligned** with that posture rather than opposed to it: it is the
lobotomy already performed.

What the headers *do* foreclose is the narrow shortcut of pointing an `<iframe src>` straight at raw
and letting the browser render it. That was a convenience, never the thesis. Do not read
`x-frame-options: deny` as a constraint on the offline-origin path; it constrains only the shortcut.

A constellation Pages origin answers `content-type: text/html`, `access-control-allow-origin: *`,
`cache-control: max-age=600`, `server: cloudflare`, and **no** `x-frame-options` — so Pages can serve
the player as a document and can be framed.

**Two paths to the same player, and they agree.**

- **Deployed** — the player is a document served from the journal's Pages origin. Identity is the
  origin; one origin is one trust decision.
- **Offline origin** — the player fragment is *built locally* from fetched source bytes by
  jekyll-enough, inside the reader's own context. Identity is the **hash** of those bytes, not
  wherever they came from.

The hash identity is the stronger of the two and should be treated as canonical, with the origin as
the convenience. That keeps the answer consistent with how chunks are already addressed (`this_hash`,
not a URL) instead of introducing a second, weaker notion of "trusted" that applies only to the
player. It also means a reader who fetched the player from raw and a reader who loaded it from Pages
can prove they are running the same player.

`build.mjs` already carries the right seam for the degraded case: `lenient` downgrades an unknown
tag, filter or missing include to a **named gap** — explicitly *"for a viewer of someone else's
source."* A reader holding the manifest but not the chunks is that viewer, and a dark timeline is
that gap. Reuse it; do not invent a second failure vocabulary.

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
`exhibits/`. One player is one trust decision; N per-piece players would each have to be trusted
separately. Exhibits eject to the piece; the player never does.

"One player" is identified by the **hash of its bytes**, with the serving origin as a convenience —
see "the hosting half" above. That is what lets the deployed path and the offline-origin path be the
same player rather than two players that merely look alike.

## Multiplicity — measured, 2026-09-01

The recurring worry is whether a repository can hold more than one pile, and whether committing the
pile to the journal root forecloses that. It does not, because the plurality already exists and is
in a different place than expected.

**`sources:` in `pile.yml` is already a list, and it is implemented, not aspirational.** `bin/ingest`
loops `for source in $sources`, and `ingest.yml` persists each into *its own branch*
(`git push origin "$commit:refs/heads/$branch"`, parented only if that branch already exists — so a
new source starts a root commit). `drop-pack` enforces one source per branch by refusing a manifest
whose `source` disagrees. Per-source owner state lands at `state/<source>/`.

So the dichotomy resolves cleanly:

- **The identity is a singleton.** `id`, `scope`, `age_recipient`, `repo_url` and `keys/pile.age.pub`
  are one per repository. One repo = one recipient = one owner.
- **The feeds are already plural.** N sources, N branches, N independent chains, one identity.

**Log rotation is therefore a new source, not a new pile.** Closing intake on `feed/tell-2026a` and
opening `feed/tell-2026b` needs no new concept and no new machinery — the sequence and the
breakpoints are exactly the branch boundaries. This is the capability the "multiple data piles"
worry was reaching for, and it is already here.

Genuinely *multiple identities* in one repo is a different thing and is **not** supported. Nothing
described so far needs it, and adding it would mean multiple recipients under one custody boundary —
squarely against invariant #4. Leave it unbuilt.

Observing someone else's pile by submoduling it needs no machinery at all: it is a git submodule of
a public repo, and `bin/verify` requires no secret. That is a third, unrelated sense of "submodule"
and should not be conflated with the two above.

## Scale — where a long pile actually hurts

Measured against a synthetic drop manifest, key-less verification (digest + chain linkage +
commitment shape), **holding no block bytes at all**:

| entries | manifest | gzip | verify | per-chunk read |
| --- | --- | --- | --- | --- |
| 312 | 111KB | 28KB | 2.3 ms | O(1) |
| 624 | 222KB | 55KB | 2.5 ms | O(1) |
| 1,558 | 556KB | 138KB | 6.0 ms | O(1) |
| 10,000 | 3.5MB | 886KB | 45 ms | O(1) |
| 100,000 | 35MB | 8.9MB | 383 ms | O(1) |

**Reading a chunk is already not a function of reading everything behind it.** Drop blocks are
independent by construction; there is no ratchet to walk. No checkpointing scheme is needed for
reads — the property is already held.

**CPU is not the limit; manifest transfer is.** 100,000 entries verify in under half a second, but
cost ~8.9MB gzipped to ship. Budgeting ~1MB gzip puts the comfortable ceiling near **11,000 entries**
— about 15 hours of audio at 5s chunks, or a journal holding ~20 hour-long recordings. Past that,
rotate to a new source. Rotation is the scaling answer; checkpointing is not.

### Partial verification — a real gap, with a clean fix

**`verifyFeed` currently refuses when a block is absent** (`missing block file ${e.block} at seq ${i}`;
`bin/verify` dies the same way). A reader who fetched 8 chunks of 93 therefore cannot verify at all
today. This blocks the player and the ejected piece both.

The fix weakens nothing, because the split is already clean:

- **Without any block bytes** you can verify the digest over entries, the signature over that digest,
  the `prev_hash` linkage, and every commitment's shape. That establishes *"the author signed this
  exact list of N chunk hashes, in this order."* Every `this_hash` is already in the manifest and
  already covered by the signed digest.
- **Per block you actually fetch**, check its bytes against its own `this_hash`. O(1). That
  establishes *"this byte string is the chunk committed at seq K."*

Together those are complete. So `verifyFeed` wants a mode where an absent block is **not held**
rather than **invalid** — and it must stay loud about which entries went unchecked, so a partial
verification can never be reported as a full one.

## Do

- [ ] `data-pile`: `verifyFeed` / `bin/verify` partial mode — absent block is "not held", not
      "invalid"; report the unchecked set explicitly. **Prerequisite for the player and for ejection.**
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

## A pile engine, or the template?

The split the engine question needs already exists in the repo: `bin/` + workflows + docs are
machinery, while `pile.yml` + `keys/` + `inbox/` + `state/` + the `feed/**` branches are the
operator's. That is the same seam `journal.anecdote.channel` runs on, so the shape is proven rather
than speculative, and `skel/` is the proven home for what the template currently carries.

**Mounting an engine does not force writing to the root** — the journal engine is mounted at
`.journal-engine/` while content lives under `journal/`, one config key serving as content dir, URL
base and data namespace at once. A pile engine could take a directory the same way.

But note what the multiplicity finding above does to the motive: **rotation is a source, not a pile**,
so the multi-pile use case that made an engine feel urgent mostly evaporates. What remains is the
ordinary engine argument — fixes reach every pile by bumping a pin instead of by hand-copying into N
forks — which is a good argument on its own and does not need the multi-pile one.

Deferred deliberately. It is a repo-shape decision with no consumer yet blocked on it, and doing it
before `media-pack` exists would be designing the glove before the hand.

## Open

- **Tell's freshness message.** Shape of *"there is a newer head"* is unspecified. It is the only
  live fact in the system, so it should stay a pointer; resist letting payload into it.
- **Rotation ergonomics.** Rotation is expressible today but unautomated: nothing closes a source at
  a size threshold, and nothing tells a reader that `feed/tell-2026a` continues into `-2026b`.
  A reader following a rotated journal needs that link to exist somewhere.
- **Player origin for an ejected piece.** It points back at the origin journal's player; what a
  reader sees when that origin is gone is undecided (the §N derelict-node question, in miniature).
