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

## The grant model, and why most users never need one

**Amended 2026-09-17.** The operator's framing, which is sharper than it first sounds:

> *"Users doing custom things will almost never require such a thing because they're integrated to
> their own offline origin. **They are their own second factor when they're on their phone**, which
> might sound too pithy to be real. But the truth is that their act of bringing the phone somewhere
> is a factor. Because in the offline case, no one's addressable. They have to bring themselves to
> each other."*

It is not pithy and it is worth stating rigorously, because the whole grant surface follows from it.

**Presence is not standing in for identity here. It is the transport.** In an unaddressable network,
being reachable is the scarce property, and the only way to be reached is to physically go. You
cannot forge having shown up, because showing up is what delivered the bytes. That is a stronger
guarantee than most remote factors, not a weaker one dressed up.

Which yields the one-line form of the whole model:

> **A grant is a way to act at a distance. The offline case has no distance, so it needs no grant.**

### And that is exactly why holding crystallises services

> *"It is the station node holding them that crystallises where services touch this at all. And that
> is where we spend most of our effort tooling this."*

**The node reintroduces distance.** A person with their phone is unaddressable; a station node is
addressable by construction, because being reachable is what a node is for. So the node inherits the
authorisation burden precisely and only because it is the party that can be reached — and the
library's custody claim (*this library has it, and has had it since then*) is what makes it worth
reaching in the first place.

So the grant surface is **not** a general requirement of the design. It is the specific cost of
having something held somewhere that answers.

## Vendor scale: hand-rolling is a front desk wearing a different hat

> *"Because we're doing it at the level of a vendor where we would offer this service, it is not
> sufficient for us to just hand roll individual access requests. It makes total sense for testing.
> But it's not good enough."*

The commercial objection and the constitutional one are the same objection. A human deciding each
access request **is** the front desk the library forbids — it has to be awake, trusted and correct,
and it does not survive contact with volume.

`GRANTS.md` already states the replacement: *the check is against the artifact, never against a
service.* At vendor scale that stops being a principle and becomes a build requirement:

> **A grant must be mintable by rule rather than by decision, and the rule has to live in the thing
> being hired.**

Which puts real weight on a document this project has so far treated as ordinary:

- **`CONSTITUTION`** governs what happens at runtime.
- **`LICENSE`** governs how you are allowed to use it — and **for vendor scale it must be
  *evaluable*, not merely readable.** A licence written only for a human to interpret forces a human
  into every issuance, which is the hand-rolled case that was just ruled insufficient.

**That is the difference between testing and offering a service**, and it is a smaller gap than it
looks: the terms already have to be written down. They have to be written down in a form something
can act on.

### Where the control point actually is

> *"What we need is control points."*

There is a tension worth naming rather than discovering. **Flooring is deliberately controlless** —
every label is live before anyone thinks of it, nothing is provisioned, and there is no allocation
step to intervene at. That is its whole value, and it means **DNS is not where a vendor exercises
control.** Neither is read time, which the no-front-desk rule closes off.

What is left is **admission**, and the operator already named the mechanism:

> *"Our porting case may just look like someone was submitting a repository on GitHub, or me doing
> it, and **through the mechanics of a pull request, I accept it.**"*

**The control point is the pull request.** It is a decision made once, in advance, in the open, with
a diff attached and a record that survives — rather than a decision made per-read by something that
has to be online. It is also, usefully, the exact thing `library.anecdote.channel` already claims as
its job: *enumeration, **admission**, and a clerk.*

## Tracked, not ignored — and what that buys

> *"All my other projects I'm doing get ignored wings of the library for containment but not
> tracking. Here, we finally get to do a little bit of both, and it's because we expect this to be
> persistent. These are items that are **committed to a repository. It's not just a working tree.**"*

A change in how the library holds, and the consequence is the point: **once dossiers are tracked,
the custody claim becomes checkable from the commit graph instead of asserted.** *Has had it since
then* stops being a sentence the library says about itself and becomes something a stranger can
verify from history they already have.

That is the library's distinguishing claim finally doing work, and it only happens for holdings that
are tracked rather than contained.

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
