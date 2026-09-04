# Super-categories are derived, not declared — nobody sends a "trade anecdote"

**Labels:** atlas, anecdote, directory, reducer
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none. Blocks the library's Atlas enumeration (`library-the-knowledge-kind.md`), the
business-directory case, and every other category that wants a listing.

## The requirement, stated as a refusal

**Nobody sends a "trade anecdote."** Nobody sends a "media anecdote" either. An author writes an
anecdote, and if it points at something, **the system should be able to work out what it is.**

That refusal is doing more work than it looks like. It says the super-category is not a field on the
object, not a picker in the composer, and not a thing an author can be wrong about. It is *derived*.

## What a super-category actually is

Deflating, and useful: **it is a tag that got promoted.** `voices`, `media`, `trade`, `city`,
`bottles`, `library` are the same kind of thing as any other tag — the difference is only that they
occupy a level of a hostname and render as a directory. Picking a super-category is picking a tag and
saying *this one is a place*.

That is why introducing `library` cost nothing structurally (`directory.mjs`: unserved levels render
as categories) and it is why this problem is tractable at all. There is no second taxonomy to build.

## Where the tags come from

The **label reducer** on the device. Its job is to crunch a resource down to labels, and its posture
is *objective*: given the same resource, the crunch is deterministic, so two devices that never
spoke should arrive at the same labels. Users socialise the crunching — they crunch for each other —
and the Atlas sees the resulting tag list **with no more input than its users having labelled
well.**

Authors therefore do not get to invent arbitrary labels, and that constraint is the feature: it is
what makes an emergent directory possible instead of a folksonomy that has to be curated.

**The hand-waving is right here, and it is worth naming.** "Deterministic how we would crunch it
down" is a strong claim. It is doing the load-bearing work in every downstream design that assumes an
Atlas can build a directory without being told, and it has not been demonstrated. Being explicit
about the size of the assumption is cheaper now than after three surfaces depend on it.

## The open questions

1. **What promotes a tag to a super-category?** Frequency? An operator's declaration? The existence
   of a node already serving at that hostname level? Today the answer is "somebody said so," which
   works for six categories and will not work for sixty.
2. **How determinate is the reducer, really?** A measured answer — same resource, several devices,
   how far apart do the label sets land — rather than an asserted one. Everything above rests on it.
   *Help has been invited on this; it is the piece most likely to move first.*
3. **Can an anecdote land in two super-categories?** A business card sent as an anecdote is `trade`;
   a business card *about a library* is arguably both. Nothing says whether that is allowed, and the
   directory rendering assumes one place per entry.
4. **What does an author see?** If categorisation is derived, an author may be surprised by where
   their anecdote landed. Surprise is acceptable; being unable to *find out why* is not.
5. **Does derivation run before or after admission?** For a library with a peer-review gate, the
   order matters: reviewing something whose category is not yet known is a different job from
   reviewing something already filed.

## The worked example to design against

*"I can put all the business cards I find into anecdotes and send them out, and they would be
identifiable as a directory thing."* No field is set, no category is chosen, and the result is a
business directory on an Atlas. If the design cannot do that case end to end, it does not work.

## Not this

Not a taxonomy, not a category picker in the composer, and not a curation queue. Every one of those
is the failure this is trying to avoid — the moment an author has to declare a category, the
categories become a thing to argue about rather than a thing to observe.

---

*Raised 2026-09-03 from the question of how an Atlas would enumerate a library's contents, which
turned out to be the same unsolved problem as how it enumerates anything else.*
