# Bottle broadcast & catch — a public page airs signed bottles; any camera banks them

**Labels:** anecdote, carrier, bottles
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none (single capability). Sits between the carrier brain and bottle storage;
first-contact posture is §R's, provenance is §L's.

## Context a cold agent needs (do not re-derive)

- **Everything below the UI already exists.** `composer/carrier.mjs` takes decoded frame
  strings and learns the set's shape from the earliest tile ("any one tile names its set…
  BEFORE the whole thing finishes decoding"), tolerates out-of-order/duplicate/damaged
  frames, flags foreign tiles, and completes into ready-to-verify transfers. Droplets carry
  `<K>|<B>|<L>`; `composer/carrier-loop-demo.html` is the emitting billboard,
  `composer/carrier-catch-demo.html` the drinking camera. `bottle-uri.mjs` gives canonical
  `<label>.<storage>.anecdote.channel` addressing with `isSlug`; `bottle-attest.mjs` makes a
  bottle self-guarding, anchored to its own host. §L's model gates processing on a signature
  over the exact payload — right for QRs that arrive with no registry on the far side.
- **The shape of the scene.** A publishing page — anyone's, anywhere — displays one static
  URL QR (the bootstrap) plus N live droplet loops, each loop airing one signed bottle.
  A visitor points a stock camera app at the bootstrap; from then on our reader is doing the
  catching. The page never knows who caught what; the transfer is the pixels.

## The capability, as shapes

1. **A bootstrap landing.** One URL a stock camera app can open that arrives already in
   catch mode: camera up, set detection running, no interstitial. This is the only URL-QR
   in the scene; every other code is payload. (The demo pages prove the machinery; this is
   the front door with the demos' dials removed.)
2. **Bank a completed transfer as a bottle.** Verified reassembly → stored under its
   canonical label automatically (the label rides in or derives from the attested payload —
   the sender proposes, the device disposes), renameable after the fact. Catching several
   sets concurrently is the normal case and the protocol already distinguishes them;
   the UI's job is per-set progress ("3 of 7 bottles, this one 62%") and a shelf of what
   landed.
3. **A faint-frame floor.** How low can frame contrast and brightness go before the decoder
   loses the stream? Photosensitivity is the driver: a broadcaster wants the dimmest,
   calmest frames that still read, because flashing high-contrast grids at seizure rates is
   not an acceptable cost of airing. Measure it the way the dent dial measures damage —
   a harness that degrades contrast until reassembly stalls, reporting the floor per
   fps setting. The floor becomes a published guarantee a broadcaster can style against
   (and a reduced-motion page can march frames slowly rather than flash them).
4. **The emitter as an embeddable.** A page that wants to air bottles should get the
   emitter *from the channel* (iframe seam) rather than vendoring the composer — the
   instrument stays singular, per the §O posture. Input: a bottle URL or inline payload +
   fps/contrast knobs bounded by (3)'s floor. Output: the loop, forever.

## Acceptance sketch

A page outside this org embeds the emitter for two bottles and prints the bootstrap QR.
A phone that has never seen anecdote.channel scans the bootstrap with its stock camera,
lands in catch mode, sweeps across both loops in one pass, and ends holding two named
bottles in its own storage — offline from that moment on, contents verified against their
signatures, labels the sender proposed and the device kept.

---

Origin: a publishing page airing a set of cited works as bottles wants exactly this and
nothing more. Requirement recorded as a shape; no consumer is named on purpose.
