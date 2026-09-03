# Supersession — a replacement is a whole new object that keeps nothing

**Labels:** atlas, tell, anecdote, directory
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none. Blocks the link-list kind (`link-lists-on-atlas.md`), and every other long-lived
posting.

## The shape

A poll ends. **An informational posting does not.** A directory entry, a list of links, a standing
notice — these are indefinite, and the only way they ever leave is by being **superseded**.

Nothing in the constellation currently says what supersession is, and the gap is load-bearing in two
places at once:

- **A long-lived anecdote on a board** that has been up for a year and is now wrong.
- **A registered list of links** whose keeper has revised it.

These are the same problem. Knowing where the **origin** is — so a reader can go fetch a newer
version — is *not* the same as **replacing what is posted**. The first is provenance and is already
solved (a bottle has an origin; D10 §3 keeps authorship legible through re-minting). The second is
the unsolved one, and **replacing is the keyword**.

## The position

Retraction already exists. **Editing should exist too — and editing is resubmission.**

> You will have to do proofs. You had to do proofs to post it.

The proof burden is not the obstacle; it is already paid once and can be paid again. What must not
happen is an *edit in place* that silently changes what a reader already saw.

So a replacement is a **whole new object**:

- **It keeps nothing.** Not its tags, not its labels, not its position, not anything derived. Every
  derived property is **re-derived** from the new content.
- **It lands like any other submission** — a validation to pass and a form to fill out. There is no
  privileged path for "this is just an update."
- **The old object is not mutated.** It is marked superseded and stays readable. Version tracking is
  what makes the change transparent, and the transparency is the point: **crunching the version
  history is how anyone sees what a keeper has been doing over time.**

## Why "keeps nothing" is the hard requirement

The instinct is to carry forward the cheap parts — tags, category, ranking — because re-deriving
them looks wasteful. **Do not.**

Anything a replacement inherits is a place where a poster can **land content under a classification
it did not earn**: post something innocuous, let it be tagged and placed, then replace the body.
Under a spotlight people will do exactly this, and they will do it in ways nobody predicted. The
only defense that does not require predicting them is that **inheritance is impossible by
construction** — the new object walks the same road from the beginning, and the classification it
gets is the one its actual content earns.

That is also why this cannot be an "edit" API with a different code path. **One door.**

## What it costs, and who pays

Replacement means the server's traffic has to be **churned** — the new object processed, the old one
marked, the derived data rebuilt. Under §R's crank that cost is not free and not the operator's
alone: *"me posting to the system, I'm gonna have to start participating in my own churn
mechanism."* A replacement is a privileged gesture like any other, and it carries the same rider.

**This makes the cost of churn honest rather than hidden**, which matters most for exactly the actor
most likely to replace things often — the operator.

## Open

- **What "superseded" looks like to a reader** who arrives at the old object. A pointer forward? A
  banner? Nothing but a date? The old object stays readable, but readable is not the same as
  *obviously stale*.
- **Whether supersession needs the same author.** Almost certainly yes for a list; less obvious for
  a posting whose author has gone quiet — and §N's dereliction posture says a quiet actor's record
  stands rather than becoming someone else's to edit.
- **Whether a chain is walkable** — v1 → v2 → v3 as a followable trail, or only ever "this one is
  current, that one was not."
- **Where the version history is crunched.** The transparency argument only pays if somebody is
  actually reading it.

## Not this

**Not an edit-in-place mechanism**, and not a general mutable-post feature. The whole design is that
replacement is expensive, visible, and derives nothing from what it replaces.
