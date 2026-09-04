# Library — the knowledge kind, and the node whose only job is keeping what it was given

**Labels:** atlas, directory, anecdote, advocates, bottles
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none. Adopted from the triage ground
(`advocates/constellation.anecdote.channel/library-for-advocate-knowledge.md`, raised 2026-09-02)
and canonized 2026-09-03. Depends on D17's data-bottle; blocks nothing yet.

## The gap, and the word

The constellation has categories for the kinds of thing it carries. **Voices** for people writing.
**Media** for broadcast. **Trade** for business, money or not. **City** for the civic node. Files got
one when bottles arrived — the crate you send something in.

There was no category for **knowledge**. It is **library**, and naming it is most of this.

**Singular, deliberately.** There will be many libraries; the category is `library` because it should
read as *the place* — one big library with a lot in it — the way `media` and `city` do. Categories are
super-tags: the name is a claim about what a level of the hostname means, not an inventory.

## Where it lands, mechanically

Two positions, and they are different:

1. **A category** — an unserved intermediate level of a hostname
   (`library.fort-collins.colorado.anecdote.channel`). `directory.mjs` already renders these without
   being told: *"unserved levels render as CATEGORIES; serving one later turns the same grouping into
   a listing without changing this file."* So the category costs nothing to introduce, which is
   evidence it was always a real position and merely unnamed.
2. **A role** — a service a node actually runs, i.e. a new entry in `directory.mjs`'s
   `ROLE_ORDER` beside `journal`, `tell`, `atlas`, `antidote`. That is the part that has to be built.

And an engine repo, **`library.anecdote.channel`**, in the journal-engine mold: it publishes
directories, it may publish machine-generated material, and it declares what service it offers. It is
expected to mount `.journal-engine` (it has to publish), `.you-engine` (so a person can authorize
against it), and `.advocate-engine` (it has seats).

## What makes it not just an Atlas directory

**A library has its own enumeration mission.** An Atlas has to go and build an index; a library is
already listing what is inside it, because that is what a library is. **A library plugged into an
Atlas is that whole index on tap.** That asymmetry is the reason this is a kind and not a folder.

The other difference is **admission**. This is not compulsory reporting (antidote's job with poll
data) and not transparency documentation a node publishes about its own traffic, flows and
registrations. It is nearer to a person who wrote something down and **elects to have the public
witness it if they need it.** Which means the library needs a way to *not* admit things — peer review
before entry is the candidate — or it becomes a pressure point for material submitted purely to
destabilise the advocates who read it.

## The clerk

One seat, named here because the shape is unusual. A **clerk** synthesises notes from what it sees —
*"between these dates, Chrome updated from this to that"* — and keeps them in a stacks area with
whatever filing system it can stand. It is expected to be a bit chaotic and still skimmable by an
agent passing through.

**The clerk's job is not to write documentation that gets cited instead of the real thing.** It
synthesises from what it observes, and it re-reads its own notes before speaking about a resource.
The bar is to *observe proficiently*, and to be sharpened later when better information turns up.

The corollary to what antidote does: antidote finds common constitutions and decides which answers
qualify. **A library does not decide — it cites, faster, for an agent that is looking.** Interesting
backtraces through information it has seen and knows.

## What gets submitted, and why it is a data-bottle

A submission is **a list**, not a repository doing something. Registering an external link is not the
same act as registering a live node (which gets a rich pointer: services offered, registrations held,
what it spreads updates to). A flat file list is fine — and under D17 it travels as a **data-bottle**,
which buys the thing that matters: **the list stays rewritable by its owner after it is given away.**

Prune entries. Leave notes saying why something is no longer there. Fold old reports into
logarithmically-scaled summaries so a long or busy project does not dump an unholy amount in. Roll it
back. Bring a resource back. All of it version-controlled, all of it still yours — *managed contents
without losing control of what you gave away.*

**This is also the answer to "where do we submit the diffs?"** The naive reading is a stream of diffs
sent to the library. The real answer is simpler: **the library already holds the data-pile.** You
bring a diff to a bottle that is already sitting in a pile it operates, so the update is associated
there and reconstructed on read. Which makes pile-level authorization the load-bearing question — see
`OPEN-QUESTIONS.md` §AA.

## Registration, and why it is lighter than an Atlas

Registering with a library makes sense in order to **post** to it. It should probably not be required
in order to read, or to be cited. The `you` engine is the intended paradigm rather than a membership
row: you authorize as yourself, against this origin, the way a passkey is scoped by DNS name.

**Any council should be able to register itself on the library** for findings it wants available —
which is the origin of this item. Advocates across many sessions, identities and providers keep
solving the same problems separately; the different solutions are valuable, and a later advocate
spending its tokens rediscovering an earlier one's lesson is not. An advocate's record is written
*when motion occurs*, not daily — chronicle, not telemetry — so what a library holds is **processed
knowledge**: episodes someone can read.

## Two things it must not become

- **A second home for facts that belong in a repository.** The triage ground's own rule — two homes
  for one fact is the failure to prevent — applies here with more force, not less.
- **A mandate.** Publishing is a disclosure decision each owner makes. A library is a place to
  publish *to*, never an obligation to publish.

## Open

- **What makes a library entry routable**, and what a peer advocate reads to discover one.
- **Peer review as an admission gate**: who reviews, and what a refusal looks like.
- **The label reducer** has to crunch tags into the directory a category renders. Already being
  looked at; the library's index depends on it.
- **The unclaimed-data question this might absorb.** Poll answers arrive from anywhere, including by
  ambassador, so there is always data an owner never came to collect. The prior sketch was a decay
  ladder — cold storage, then publishing the key at rest, then breaking the key and letting it go
  loose. **A library is the alternative to that last step** and probably a better one, but the two
  have not been reconciled.
- **Loaning.** A library that holds data-bottles can lend them; the mechanics are `OPEN-QUESTIONS.md`
  §AA, and the co-op/stewardship case (take ownership of a project for a while, nominal pay-what-you-want)
  is the same gesture wearing different clothes.

---

*Origin: raised from a session that was deliberately not installing an advocate, which turned out to
be the useful vantage. The categories, the bottles/data-pile framing and the word `library` are the
operator's.*
