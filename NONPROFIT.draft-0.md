# antibody — the operator's note (draft 0)

> **Status: draft zero — intentionally.** This note lives in `civic-node` for now
> because this is where the machine's constitutions already sit, and because *this
> note is the license to fly one.* It is marked draft-zero on purpose: when the org
> `.github` repository is enabled, that repository has permission to adopt this text
> as its **V1** — promoting it onto itself as the canonical, self-hosted statement of
> the operator's promise. Draft-zero is the seed; `.github` grows the tree.
>
> **Versioning is a hash.** The real version of this document is its **content hash** —
> a fingerprint over the exact terms as they stand, changing every time the terms
> change. A signed hash of these terms is the operator's attestation of *what it
> promised, and when*: the same "sign literally everything" discipline the rest of the
> system runs on, turned on the operator itself. Draft-zero has no hash worth citing;
> **V1 begins when `.github` fixes these terms and signs one.** From then on, "which
> version of the promise" is answered by a hash, not a number — terms of service that
> are honest about being a moving, signed target.
>
> **Not legal advice.** This records the *promise and the shape*, for counsel to review
> and instantiate. It is intent, not filed bylaws.

## Why this note exists

Every part of this machine states its constitution — Atlas, Tell, the piles — because
none of them is easily observable, so each writes down its promise and signs it. The
**operator** of a running instance is the one part that is *effectively unobservable*
when it is not under constant surveillance. So the operator needs a constitution too,
stated and signed like everything else. This is that constitution, for the operator.

## The instrument: a 501(c)(4)

The operator is organized as a **501(c)(4) social-welfare nonprofit**, not a (c)(3).
The choice is about *reserving options*: a (c)(4) may lobby without limit in service of
its purpose, may engage in *some* political activity so long as social welfare stays the
primary purpose, and may hold government contracts and earn revenue (including selling
data and services) in furtherance of its mission. The trade-offs — contributions are not
tax-deductible, and earned revenue may face unrelated-business tax — are acceptable for
what this operator is: an advocate that partners with cities, states, and constituencies
and campaigns for its own replication. *(Counsel confirms the specifics; this note fixes
the intent.)*

## The constitution (from the journal)

The promise begins where the journalism outlet began — signed on the front page of the
journal, never on the individual pieces:

> **You are absolutely welcome to do what I do. You are welcome to reprint every word —
> but only if you sign your own name to it. You can say what I say; you can do what I do;
> you have to do it the same way.**

This is copyleft with **attribution-as-signature**: replicate freely, but *re-sign*, and
carry the terms forward unchanged. It is the *legal mirror* of the system's cryptographic
spine — "every leg performed by consenting people who met, and signed." The license and
the crypto are one idea at two layers, which is why the license is enforceable *in
principle* here in a way most data licenses are not: the data is content-addressed and
signed back to origin, so it is provable whether a downstream user re-signed their own
name and kept the terms — or did not.

## The data: public, licensed — not open-source

The data this operator brokers is **public by construction and by intent**, so that *what
the public thing is allowed to be used for* can be defined. Public is not open-source; use
is governed. Three layers carry the promise, none of them encryption:

1. **Pseudonymity.** Contributors are device keys, never names. The record proves *that a
   consenting person answered*, not *who*.
2. **A constituency view-gradient.** You are welcome to the data you are a constituent of.
   On the directory you see aggregates for your own constituencies, and peers *above* you
   — a city, a county, a school district — **in aggregate only, never their direct rows.**
   Membership is proven on the contributor's own device; the operator serves what you are
   entitled to see. This is view-authorization by membership, not access-control by key.
3. **Provable lineage.** Every leg is signed; the data can source every step of where it
   came from and how it was consentful. That lineage is what makes the operator a
   *good-guy data broker for public-interest data* — and what a partner (a city, a state)
   is actually licensing.

**The deferred adversary:** someone taking the data and reselling or relabeling it under
different terms. That is not how it is licensed, and it will have to be combated — but
enforcement-in-practice is explicitly a **later research task**. What exists today is the
*provability*; the enforcement machinery is future work.

## Anti-capture by replication

The operator is meant to **replicate.** You should run your own fragment on your own
top-level domain; the growth path is many such wings, deployed differently, that still
aggregate (a domain-registrar strategy, over time). Two rules keep replication from
curdling into a central power:

- **A position, not an apex.** What is "above" a set of wings is *another node that wings
  have filed themselves under, by consent* — never an operating headquarters. It "doesn't
  operate much of anything; it's just a place." (See civic-node #88.) The architecture
  permits convergence and refuses to enforce it.
- **Capture is bounded to the instance.** It must never be possible for someone to take
  one instance's board and affect anything beyond what that instance actually ran — its
  own contracts, its own allies, its own brokered data. Take the board, take only the
  branch. This requirement is satisfied by the architecture (fragments merge by content
  id, no one arbitrates) as much as by the bylaws.

## Dual use

Most repositories in this ecosystem have a dual use: a **canonical name** that speaks to
the public, and a **gloved version** that provides tooling for something else to steer.
The operator implements that same metaphor. The canonical name **campaigns** — it exists
to get you to run your own — while the gloved instance quietly **operates.** The operator
is shaping this system both to go to bat for it and to use it directly; the note says so
plainly rather than pretending the two roles are separate.

## The name

The operator carries the same name as the journalism outlet — **antibody** — because it
is supposed to *replicate*: you should do what it does. The name is worn as a moniker on
purpose, esoterically, to prove it is *one of a kind of thing* rather than the thing
itself. When you implement yours, give it another name. (A shared name is possible if a
different shared thing were chosen; the point is only that no single brand may rise above
aggregation and be controlled by a hyperscaling centralized node.)

## Deferred / see also

- **Licensing enforcement** against relabeling/resale — later research, out of scope here.
- **The `.github` promotion** — when enabled, `.github` may adopt this as V1 and begin the
  signed-hash versioning described at the top.
- civic-node **#86** (the ballot drop door — public-by-construction, the view-gradient),
  **#87** (the Atlas-fronted poll + network-addressed ballot — the lineage this data is
  provable against), **#88** (the aggregation "place above" — the position this
  anti-capture design satisfies).
- `civic-node/VISION.md` ("neighbors, not a graph"; "even the state is just an Atlas"),
  `atlas.anecdote.channel/notes/boundary-canon.md` ("structure is a position, not a
  value"), and the journal outlet's own front-page constitution, which this note grows
  from.
