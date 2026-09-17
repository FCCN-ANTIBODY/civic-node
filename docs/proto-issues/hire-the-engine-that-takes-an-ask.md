# Hire — the engine that takes an ask, and is nonspecific about how it gets done

**Labels:** trade, anecdote, library, advocates
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none. Named by the operator 2026-09-16 after **trade engine** was tried and rejected for
being too general. Consumes the primitive ruled in
[`dossiers-the-agentic-kind.md`](dossiers-the-agentic-kind.md) but **does not depend on it** — see
*What is hireable*. Nothing is built.

## The name, and the three reasons it beat `trade`

> *"I have been trying to figure out if it's, like, a trade engine. But that was so general. I didn't
> like it. **The hire engine makes a lot more sense. It correctly positions the unknown free-form ask
> on the person approaching you**, and it is nonspecific about which tools or how you get it done at
> all. It doesn't specifically mean that you are in the trade sector either."*

Three properties, and the first is load-bearing enough to be a design rule rather than a naming
preference:

1. **The indeterminacy sits on the approacher.** A hirer arrives with an ask nobody enumerated. That
   is what hiring *is* between people, and the word carries it for free.
2. **It says nothing about method.** Which tools, which model, which machine — all unstated, all the
   hired party's business.
3. **It does not claim a sector.** `trade` announces commerce; `hire` survives the unpaid case, the
   favour, the trial, the internal use.

## The inversion, which is the actual content of this document

> *"I do wonder if the personas are just a medium for a hire-engine. So far, we're talking about
> personas being put to use, but **that's just the vanity side.**"*

Taken seriously, this reverses figure and ground in
[`dossiers-the-agentic-kind.md`](dossiers-the-agentic-kind.md). That document treats hiring as a
surface the dossier library eventually grows. **This document proposes the opposite: hiring is the
product, and a dossier is one medium in which an ask is specified.**

The two sides are not competitors and it is worth being exact about what each produces:

| | produces | without it |
| --- | --- | --- |
| **the dossier side** (*"vanity"*) | **supply**, and something worth browsing | a queue with nothing distinctive in it |
| **the hire side** | **demand signal**, and a price | a catalogue nobody ever prices |

So the operator's self-criticism is half right. The vanity side is the shop window and it is not
optional — but a project that ships only the window has no revenue and, more importantly, **no
measurement.**

## What is hireable — and it is not only personas

> *"If you were paying a specific persona configured just so as a developer, I am interested. **Even
> if all that's happening is your harness is popular? It's still the same thing.**"*

A harness is hireable. So is a prompt set, a renderer configuration, a voice, a house style. The
hire engine should therefore take **no position on what kind of thing it is hiring**, and require
exactly one property of it:

> **The hired thing must be citable at a pin.**

Which is already ruled, in the dossier document's lifecycle section: *the start and the endpoint is a
standalone repository that holds at its root just the thing*, and the repository name is the default
URL slug. **That work already built this engine's input format** — and the input format is the entire
coupling. A dossier is one kind of citable thing; the hire engine never needs to know it was one.

**This is why hire does not depend on the dossier engine existing.** It could be stood up against
anything already standalone and citable, today.

## The refusal: no service catalogue

The consequence of putting the indeterminacy on the approacher, and the easiest thing to lose.

> **The hire engine must not enumerate what it does.**

The moment it publishes a list of services, the indeterminacy moves back to the provider and it has
become a trade engine again — the thing that was tried and rejected. What it has instead is the shape
hiring actually takes between people: **an open ask, a quoted response, an accept, a record.**

There is a family pattern here worth pointing at rather than restating.
[`antidote/docs/faces.md`](https://github.com/FCCN-ANTIBODY/antidote/blob/main/docs/faces.md) sorts
its surfaces by which field is compulsory — anecdote has neither question nor constitution required,
Tell requires the question, Antidote requires the constitution. **Hire's version is: the ask is
required, and the capability is unstated.** Whether it belongs to that family or merely rhymes with
it is not decided here.

## What is actually being sold: local capacity

> *"It's the thing that would ostensibly let any of these personas perform any of that work here
> locally if the CPU were strong enough. Mine's not. But if they were doing a chat thing, I could run
> the chat bit or images or audio or just written. Their references could be accessed. New reference
> samples could be tested."*

The dossier document ruled that **hired-away is just a citation** — the hirer cites the thing and
runs it on their own compute, needing nothing from this engine. So everything the hire engine sells
is the *other* case: **execution on the node's own resources**, with the references in reach and new
derivations possible.

Which means capacity is the scarce good, not willingness, and the constraint is small and real —
eight cores. A node accepting orders is accepting load, and should say so on the workload board,
because *intent is not observable from outside the process that holds it* is exactly the failure a
silently busy node reproduces.

## Retention is a price, and it should be quoted like one

> *"New reference samples could be tested, and **we could retain those for our own purposes** when
> people want to see stuff on our own resources."*

That is a term of trade, and it is the honest form of a bargain most services make silently. It
should be **quoted in the ask**, alongside whatever else is being charged, rather than discovered in
terms nobody read.

It is also a **second consent axis**, distinct from the one the dossier document keeps flagging:

| | whose consent | question |
| --- | --- | --- |
| the dossier's open question | **the subject's** | may a dossier about me exist, travel, speak as me? |
| **this one** | **the hirer's** | may the node keep what was produced while running my order? |

Neither is written. They are different parties and they will want different answers, and a single
"consent" record that tried to serve both would serve neither.

## Measurement: let the market, and say what that gives up

> *"I'd be interested in a way to rate how well a persona harness is even having any effect in
> particular. It's a different kind of science to do. **But that's where I let the market worry about
> it.** We're gonna find out which ones are having an effect and which ones are not worth hiring."*

This is the stronger instrument and it should win. **A hire record is revealed preference** — someone
spent something — which is better evidence than any synthetic test of whether a fragment changes an
output.

Two honest caveats, recorded so the choice is made with them rather than against them:

- **It is lagging and sparse.** Early on there are no engagements, so it measures nothing. The
  ablation the dossier document proposes — *does this fragment change the output* — is a **cold-start
  substitute**, useful until engagements exist and **should defer to them once they do.**
- **It measures the wrong unit for the author.** The market says which *harnesses* are worth hiring.
  It never says which *fragment inside one* was dead weight. Those are different questions with
  different audiences, and only the first is the market's job.

## Where it sits

- **A separate engine from where dossiers are built**, which is the operator's ruling and the reason
  is specificity: *"the dossiers are so general, and the agent services are so specific."* The
  dossier document already separates the journal (holds, publishes, cooks intermediates) from the
  thing that registers services. **This is that thing, now named.**
- **Mounted at a station node**, which is what makes local execution meaningful at all. A hire engine
  with nothing under it is a form.

## Not decided here

- **Whether `hire` is also a category word.** It is a function and probably not a level of a
  hostname. `CATEGORIES.md` is explicit that taking a word locally is the irreversible act; this
  proposes nothing.
- **What an order looks like on the wire.** The dossier document notes an order is a *submission* and
  that Tell already describes that shape — *a mailbox, inert until spoken to*. Whether the engine
  mounts Tell or merely rhymes with it is open, and it should not be designed from scratch either way.
- **How a quote is produced.** An ask nobody enumerated cannot be priced from a table. Whether that
  is a human answering, a standing rate, or a refusal to quote at all is unexplored.
- **What happens to a hired thing that changes underneath an engagement.** The pin makes the version
  precise; nothing says whether an ongoing hire follows the head or stays where it was hired.
