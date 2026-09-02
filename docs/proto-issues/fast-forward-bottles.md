# Fast-forward bottles — a bottle whose payload is a commit range, carried by someone you need not trust

**Labels:** anecdote, carrier, bottles, git-enough
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none (single capability). Sits on top of `git-enough` and the bottle machinery;
provenance is §L's, the signing and endorsement model is D10's, and the trust posture is
invariant #2's. **Nothing here asks for new cryptography (invariant #8).**

## The shape

A person carries an update for a repository that is not theirs, to someone who is not online, on a
medium that holds no connection: **a bottle whose payload is a commit range rather than a whole
tree.** The recipient applies it without trusting the carrier, because the signature is over the
payload — not over the carrier, the container, or the route.

**The wider the range, the more useful the carrier.** One bottle that fast-forwards from any of the
last ten states is worth more to a room full of strangers than ten bottles that each fit exactly
one recipient. Width is what makes a carrier worth meeting.

## What already exists

The trust story is finished; this is a packaging question sitting on top of it.

- **`git-enough`** (anecdote.channel) — git as a payload.
- **D10 §2** — the signature covers the canonicalized *payload*, never the image container, so
  re-encoding a capsule does not break authorship.
- **D10 §3** — an outlet signs with its own key and the platform pin endorses it, so a carrier who
  repackages is legible as a **distributor** rather than mistaken for the author.
- **§L** — signed self-contained QR provenance, built for exactly the case where there is no
  registry on the far side.
- **Invariant #2** — verify-from-anyone; trust decides *action*, not *admission*.

## What is missing

Three things, all shape, none cryptographic.

1. **What a range bottle declares about itself**, so a recipient can tell *before applying it*
   whether it fast-forwards their copy — and what happens when it does not. **A refusal has to be
   ordinary, not an error.** Most bottles a person catches will not apply to them, and that is the
   normal case, not a fault.
2. **How wide is worth carrying.** There is a real trade: range width against capsule size against
   how long the QR loop runs before it repeats. Somebody has to say what the knob is and who turns
   it — the minter at mint time, or the carrier at the moment of repackaging.
3. **Whether repackaging is one act or two.** Resharing the received capsule unchanged is *passing
   the original proof along* and should stay effortless. Re-minting a narrower or wider range from
   the same commits is **authorship of a new artifact over identical bytes**, and carries the
   carrier's signature rather than the author's. The bytes can be the same; the acts are not. **If
   the interface does not distinguish them, the distributor story collapses back into the author
   story** — and D10 §3 stops meaning anything in practice.

## Why it is written down here

Raised in the advocates triage ground on 2026-09-02, from the conversation that designed the
framework. It is a cross-repository concern by construction — it is about carrying updates
*between* repositories — which is exactly the thought no single-engine advocate is permitted to
have, and therefore the kind that would otherwise never get raised by anyone.
