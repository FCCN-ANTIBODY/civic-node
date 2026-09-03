# The outbox — you post what you already committed, and the bottle carries its own anecdote

**Labels:** data-pile, anecdote, atlas, journal, exhibits, bottles
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none. Sits under `supersession.md` and `link-lists-on-atlas.md`; consumes
`exhibits/E1` and `E2`, which already put exhibits in a pile.

## The shape

**An anecdote is produced from a pile you already committed it to — not submitted by an account.**

You write it into your own pile first. It is yours there: encrypted at rest, not lying around, and
**rewindable** — you can undo it, rework it, change your mind, and none of that is a public act
because nothing has been produced yet. Releasing is a separate, deliberate step.

That makes the requirement for speaking at all pleasantly small: **to speak from a node you need a
pile.** Which is not a big ask.

## The outbox is one pile, on a branch, and it should not be subdivided

The default shape is a single **outbox**: a data-pile whose job is to produce artifacts, living on a
branch of the repository it belongs to (which keeps it out of a root whose commit hash other people's
submodule pins are watching).

A keeper *may* divvy it up. **They mostly should not**, and the reason is the interesting one:
**the value is in the data socializing with its contemporaries.** Things kept together accumulate
relationships — an exhibit cited twice, a piece that answers an earlier one, a list that grew out of
a posting. Cut the outbox into per-topic piles and each fragment is coherent and none of them know
anything. **One outbox is the strongest configuration, not merely the simplest.**

## The bottle carries the anecdote, rather than the anecdote wrapping a bottle

Implementation today makes the anecdote the outer thing and the bottle a payload it points at.
**Invert it: canonize the anecdote's spec inside the bottle.** The bottle is the object; the anecdote
is a document within it.

This buys several things at once, which is the sign it is the right way round:

- **An anecdote can point at anything.** The pointing problem was only hard while the answer had to
  be a URL. The pile holds the thing, the bottle carries the pile, so *what the anecdote is about* is
  simply present. No addressing scheme to invent.
- **Updating the bottle IS updating the anecdote.** No distinction between revising the text and
  revising the thing — it is one evolving object, and it carries its own git history rather than
  leaving the history behind on whatever board displayed it.
- **A server can render the anecdote out of the bottle and sign what it rendered**, redactions
  included — because the redaction is a property of the pile's selective disclosure (E1/E2), not
  something the display layer has to be trusted to perform.

## The tangle: whose pile holds the exhibits?

An ejected journal piece (`cite-autumn-ryan-<slug>`) cites exhibits. Those exhibits belong to the
**root journal** — an author, or a subject area — which today keeps no pile at all. So: does the
piece get its own pile with the exhibits copied in?

**No, and the argument against it is already in this document.**

- **An exhibit is cited by more than one piece.** Copies mean the disclosure decision — what is
  sealed, what is quoted, what is shown at 1:1 — gets made N times and **drifts**. E1 and E2 are
  precisely about deciding that *once*, carefully, per exhibit.
- **Per-piece piles are the subdivision the section above argues against**, in its worst form: one
  pile per artifact is maximal cutting-up, and nothing socializes with anything.

**The pile follows the speaker, not the artifact.**

| thing | what it is | gets a pile? |
| --- | --- | --- |
| the **root journal** (author / area) | the speaker | **yes — one outbox** |
| an **ejected piece repo** | the piece's canonical history and citation address | **no** |
| an **exhibit** | media held once, selectively disclosed | lives *in* the outbox |

The ejected repo keeps doing its job — it is still where the piece's history lives and still what a
citation addresses. It is not replaced and does not need a pile; **the pile is the speaking surface,
not the storage of every artifact that ever gets spoken about.**

So posting an ejected piece as an anecdote is: the **journal's outbox** produces a bottle carrying
the piece (`git-enough`, shallow or full — the release depth is a choice) *and* the disclosed
exhibit fragments it cites, because both were already in the outbox. Nothing is duplicated, and the
disclosure decision is the one already made.

**What is actually missing is small:** the root journal has no outbox yet. That is the work.

## Releasing to more than one place

The same anecdote can be released to several Tells. The bottle is one object; each release is its
own registration, and **freshness is a property of the release, not of the bottle.**

An update at the origin does not propagate — that is D10 §3 working as designed (adopters stay
downstream of an identifiable origin) and `supersession.md` applying (a replacement is a new object
that keeps nothing). A Tell shows the release it holds.

**Open, and it needs deciding rather than defaulting:** whether a Tell may re-fetch from origin, and
if so, whether a reader can tell which behaviour they are looking at. A board that silently updates
and one that faithfully shows what it was handed are both defensible; being unable to tell them apart
is not.

## The punchline: publishing is not a second act

**Updating a journal piece over time and releasing it as an anecdote are the same act.**

Not two workflows that resemble each other — one workflow. The outbox holds the piece; the bottle
carries the anecdote; updating the bottle *is* updating the anecdote. So a journal is not a thing
that *has* an outbox. **A journal IS an outbox** — a pile whose job is to produce its artifacts,
which is the definition already given above.

That deletes the publish step as a separate concept. There is no "now post it" that has to be kept
in sync with the writing; the writing, released, is the posting. The version history a reader gets is
the piece's actual history, because there was never a second copy to diverge from.

Three things follow, and the last two are the ones that bite.

### Every release is an update; not every update is a release

The outbox is rewindable and nothing leaves until it is **produced** — so the produce gesture is the
release, and it stays deliberate. This is already the model, but the collapse makes it load-bearing:
without it, a typo fix is a publication, and a board fills with N postings of one piece.

### Re-labeling cost scales with how often you release

`supersession.md` requires a replacement to **keep nothing** and re-derive every property, for good
reason — inherited classification is a place to land content that did not earn it. But under this
collapse a frequently-revised piece pays a **full cold labeling** every release, and that cost lands
on the labeling commons (**§Q**) or on whoever is subsidizing it.

A way through that does not weaken the guarantee: **show the labeler the predecessor's label as a
prompt, non-bindingly.** Nothing is inherited — the new object is still labeled on its own content,
and the label it gets is the one it earns — but confirming or amending a prior reduction is a much
smaller task than a cold read. The anti-abuse property survives because the prompt has no authority;
only the cost changes. **Open:** whether a prompted label must be marked as such (it is a different
provenance from a cold one — see §Q on labeler provenance).

### The tags you attach are still a claim, not a placement

*"With the tags about what's going on, what's in it"* — those are the **author's self-declared tags**,
and §Q is explicit that they are not what places a piece on a subject board. The collapse must not
quietly re-import self-placement: the author's tags ride along as a claim about the work, the board's
categorization stays a finding produced by the commons, and **a piece still never places itself.**

Both objects are wanted. They should not be stored as one field.

## Also open

- **Where the outbox branch renders**, if at all — the same question `branch-addressable-piles`
  raises. An outbox nobody can see is a drafts folder.
- **Whether a piece can be released without its exhibits** and still verify — the excerpt is
  provable against the original, but only if the original is obtainable by someone.
