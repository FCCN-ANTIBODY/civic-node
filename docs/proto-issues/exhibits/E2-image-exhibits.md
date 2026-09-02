# EXHIBITS 2 — image exhibits: the thumbnail is a derivation, the zoom is the original

**Labels:** exhibits, data-pile, journal
**Status:** proto-issue — measured, nothing built. Sibling of `E1-sealed-exhibits.md`.

Sealed audio works because slicing time is not resampling: a chunk is the phone's own bytes.
Images do not get that for free, and the difference decides the UI rather than the other way
round.

## The distinction that shapes everything

- **A crop is a fragment.** Take the region and it is provably part of the original.
- **A resize is a derivation.** None of its bytes appear in the original; the only proof is
  publishing the transform so a reader can re-run it.

A resized photograph presented as raw is a false claim made in good faith. So the two must look
different to a reader, and conveniently they already want to.

## The shape: reduced view onboards, hover shows the real thing

A reduced image is honest by convention — nobody mistakes a thumbnail for the original, and it is
reduced precisely because it is not usefully viewable at 1:1. Its job is **onboarding: knowing
where to look closer.** Hovering then shows the *original at 1:1* under the cursor — a fragment,
provable — rather than the whole image blown up, which is unwieldy at these sizes and shows
nothing a reader could not already see.

That splits the two claims along the line a reader already understands: the small thing is a
derivation and says so; the close look is the actual bytes. It also means the derivation never has
to carry the evidentiary weight.

## Measured, 2026-09-02 — the real exhibit photograph

`precision-security/exhibits/IMG_0363.jpeg`, 4032×3024, `yuvj420p` (4:2:0 → **16×16 MCUs**),
2.9MB. `jpegtran -crop`, edge tiles clamped to what remains:

| tile | tiles | total | overhead | avg |
| --- | --- | --- | --- | --- |
| 256px | 192 | 3024KB | +3.6% | 15KB |
| 512px | 48 | 2934KB | **+0.6%** | 61KB |
| 1008px | 12 | 2911KB | −0.1% | 242KB |

**Tiling is nearly free in bytes, and a hover is nearly free in bandwidth:**

```
a 2x2 hover window at 512px ....  331KB
the whole image ................ 2916KB
```

Roughly 9× less to show someone the part they are actually looking at. That is the same argument
sealed audio makes about a 51-minute recording, arriving from the other direction.

**512px is the suggested default** — 48 tiles, +0.6%, and 512 is 32 MCUs so the grid aligns.

### The lossless claim, stated exactly

An MCU-aligned `jpegtran` crop preserves the DCT coefficients: the tile's compressed data *is* the
original's, re-containered. But the decoded **pixels** are not identical everywhere:

```
interior (480x480 of a 512x512 tile) ... IDENTICAL
whole tile vs the same region .......... RMSE 14.87 (0.00023)
```

The difference is confined to the boundary MCU row and column, because 4:2:0 chroma upsampling at
a crop edge no longer has neighbouring samples for context. Invisible, but the honest claim is
*"the coefficients are provably the original's; decoded pixels match except at the seam"* — not
*"the pixels are identical."* Compositing tiles with one MCU of overlap and drawing only interiors
removes the seam entirely, and is cheap.

### The footgun

**A misaligned crop does not fail — it silently returns a different region.**

```
asked for  512x512+1020+508
got        524x524          (offsets snapped down to the MCU grid)
```

`jpegtran` preserves losslessness by *expanding the crop* rather than by re-encoding. So a tiler
that requests unaligned coordinates and labels the result with what it asked for is publishing a
mislabelled fragment while every byte remains genuine. Align the grid to 16px, and assert the
returned dimensions rather than assuming them.

## The invariant this must not break

From the NCCV side, and it applies to sealed audio today as much as to images:

> **A tile that has never been disclosed must not become disclosable later.**

Disclosure is per-piece; any number of pieces may draw on one store of evidence (E1 puts the pile
at the journal, deliberately); published keys stay published. So a second piece can undo the
first's redaction **permanently**, and withdrawal does not reach a key that is already out. On a
letters page that means the promise made to a contributor is true of their letter and false of the
photograph in it, which is worse than not offering the feature.

Two ways to hold it, and the difference is the usual one:

- **As a rule** — refuse to generate a disclosure touching a withheld region. Enforceable, and
  forgettable; an override looks like ordinary work.
- **As an absence** — never generate a key for a withheld region at all. Not a rule being kept, a
  thing that does not exist. Same shape as the ejection gate, where a piece is uncitable before
  ejection because the citable object is not there.

**Prefer the absence.** `drop-pack` wraps a per-block key to the pile recipient, so *not wrapping
one* yields a tile that is provably part of the image — its hash is in the signed manifest, its
position is on the grid — and permanently unopenable by anyone, the author included.

Two consequences that should be decisions rather than surprises:

- **You cannot change your mind.** If the person later consents, that does not un-redact anything;
  it means publishing again from the original, which is not in the pile.
- **It must survive rotation.** E1 has rotation as "close one source, open another." A rotation
  that re-seals content mints fresh keys — silently re-keying a withheld region and undoing the
  guarantee as ordinary maintenance, with nobody at fault.

## Absence must be declared, never inferred

`bin/verify` requires every drop entry to *name* a key file, so a deliberately keyless tile needs a
representation rather than a hole. That is not a workaround for the checker — it is the reason the
redaction is worth anything:

> A thing that is deliberately not here has to say so, because otherwise it is indistinguishable
> from a thing that is broken — and the reader cannot tell an act from a fault.

A tile that is provably part of the image, positioned on the grid, and permanently unopenable is a
**statement**. The same tile indistinguishable from corruption is a broken file, and the person it
was withheld for has no reason to believe the difference. Same rule as a withdrawn letter rendering
as *withdrawn* rather than being omitted.

## Do

- [ ] `bin/image-tile` — the sibling of `media-chunk`: MCU-aligned grid, clamped edges, asserts the
      returned dimensions, emits a `media.map/v1`-shaped map with grid positions instead of times.
- [ ] The reduced view as a **declared derivation**: publish the transform beside it so a reader can
      re-run it, and never let it be mistaken for the fragment.
- [ ] The hover surface: fetch only the tiles under the cursor, draw undisclosed regions dark —
      the timeline's lit/sealed distinction, in two dimensions.
- [ ] The keyless-tile representation, and `verify` understanding it as declared rather than missing.
- [ ] `img-src blob:` in the engine CSP — **one token, and only when this work starts.** It is
      deliberately not granted today; a permission for a thing that does not exist is how a policy
      stops meaning anything.

## Open

- **Rotation versus permanent redaction.** These collide and nothing reconciles them yet.
- **Whether the reduced view is derived at publish time or on the fly**, and where its transform is
  recorded so the derivation claim is checkable.
- **EXIF.** Tiles were cut with `-copy none`. What metadata a fragment should carry — and whether
  stripping it weakens the provenance claim or strengthens the privacy one — is undecided.
