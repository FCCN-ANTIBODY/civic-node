# Dossiers — the artifact a voice is served from, and why it is not a persona

**Labels:** library, anecdote, bottles, advocates, trade
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none. Raised by the operator 2026-09-15 as an unbound idea ("the binding is a lot less
clear so far than what I wanna do"). Depends on `library`'s holding and `GRANTS.md`; blocks nothing.
**Nothing is built and nothing has moved.** This writes down the shape while it is still cheap to
change, and — more usefully — records the four places where the machinery already exists and the
one place where a stated plan runs into a constraint it cannot negotiate.

## The gap, and the word

The constellation can already say what a thing *is* — `voices`, `trade`, `city`, `media`, `library`,
`bottles`. What it cannot say is **who is speaking, in enough detail that something else can speak
as them.** A voice font, a set of reference shots, a register, a list of things this subject would
never say: these exist, scattered, in the projects that happened to need them, and there is no shape
that holds them together or hands them on.

The operator's word for that shape is **dossier**, arrived at by rejecting **persona**, and the
rejection was right for two reasons that are worth separating because only one of them was said:

1. *(said)* **A persona is something you put on.** It describes a mask, which makes every use of it
   sound like impersonation even when the subject is the author herself.
2. *(said)* **A persona is canonical by construction.** Publish one and it has a name; fork it and
   the author's name has to join the real name to disambiguate, so the fork is a rival claim to an
   identity rather than a second opinion about one.

**Dossier fixes the second one structurally, and that is the keystone of this whole document.**

### A dossier is *about* a subject. It is not the subject.

Everything else falls out of taking that literally.

- **Many dossiers may exist about one subject, and they need not be reconciled.** That is not a
  defect to engineer away; it is the posture the library already takes everywhere, stated for `land`
  in [`CATEGORIES.md`](https://github.com/FCCN-ANTIBODY/library.anecdote.channel/blob/main/CATEGORIES.md):
  **hold both, enshrine neither.** A library that reconciled two dossiers would be adjudicating,
  which is the thing it does not do.
- **The fork-naming problem dissolves.** `autumn's dossier on antibody` and `someone else's dossier
  on antibody` are two files about one subject. Neither one *is* antibody, so neither has to win,
  and appending the compiler's name is correct rather than a disambiguation tax.
- **Identity is the pair, not the name.** A dossier is identified by `subject × compiler`, and the
  folder name is a convenience. Two dossiers that agree they are about the same subject need a
  shared subject id to say so; that id is the only federation hook this design requires, and it
  belongs in the dossier rather than in any index.

### The connotation is a feature, and should not be apologised for

`dossier` carries surveillance in it — a file compiled *on* somebody, often without their knowledge.
That reading is real and it argues **for** the word, because it forces a question a persona library
would never have been made to ask: **did the subject agree?**

A dossier on a character you invented, a dossier on your own company's brand, and a dossier on a
living person are three different objects, and the difference is consent. A design that cannot tell
them apart will eventually be used to do the third while believing it is doing the first. The word
keeps that visible. See *Provenance and consent*, below, which is the one part that must not be
bolted on later.

## What it keeps

Six parts. **Every one is optional**, every one is separately addressable, and that is not a
convenience — it is the factorization the operator asked for, and §*Composition* is why.

| part | is | notes |
| --- | --- | --- |
| **identity** | `NAME` (one line, machine-first), subject kind, subject id | the canon file already promises this shape; see `EXHIBIT.md` |
| **register** | how the subject speaks — diction, rhythm, what it never says | text. The part a brand usually has and never wrote down |
| **timbre** | the actual voice font, samples, the sound | bytes, and **routinely absent**. A brand with no voice font still has a register |
| **stance** | what this subject refuses to say or do | `CONSTITUTION`-shaped. The part that makes a dossier safe to hand to an agent |
| **reference** | reference shots, documents, source material | bytes. Bottles, in a pile |
| **continuity** | facts that must stay true — what happened, the lore | spans projects; has an origin; the part that makes a universe a universe |

Two of those deserve an argument rather than a row.

**`stance` is the most valuable part and the one always missing.** A branding kit is mostly a
palette and a logo lockup, and what an agent actually needs from it is the refusals — the joke this
brand does not make, the claim it does not get to imply, the register it drops into when it is
wrong. Undocumented everywhere, because a human designer absorbs it and never has to serialize it.
An agent cannot absorb it. **If this engine keeps one thing the incumbents do not, it is this.**

**`timbre` being optional is the operator's own observation and it generalizes.** *"A dossier might
be able to speak about a collective of things without specifically having a dossier for every voice
font that gets deployed by a brand."* Correct, and the general form is: **a dossier may hold a part,
reference a part, or lack a part, and a consumer must be able to tell which.** A missing timbre and
a timbre-by-reference are different facts and a resolver that flattens them has destroyed the one
the consumer needed.

## Composition — the factorization, and the engine's actual job

A lore set is not a bigger dossier. It is **a dossier whose parts are shared by reference into the
dossiers of its members.** A branding kit is a dossier whose `register` and `stance` three character
dossiers inherit. The universes the operator describes — *"they definitely do come in groups because
they're, like, universes… they might span multiple projects, but we care about their origin"* — are
exactly this: shared `continuity`, inherited `stance`, individual `timbre`.

So the engine's job is narrow and it is **resolution**:

> Given an address, assemble the effective dossier by following references, and report **where each
> part came from.**

That provenance report is not a debugging nicety. It is the thing that makes a dossier trustworthy
behind an API: an agent asking *what does this brand refuse to say* gets an answer **and** the
address the answer came from, and can decide whether it trusts that source. An answer without a
provenance is a claim the engine has made on its own authority, and this engine has no authority.

### Parts pin separately, and one of the operator's examples proves it

*"It might just be a persona that has a voice that is used to read certain generated news content."*

That consumer wants the **latest** register — the brand changed how it talks last week and the
reader should follow — and a **pinned** timbre, because the voice changing under a listener mid-series
is a defect. One dossier, two different freshness requirements, at the same moment.

**So the citation unit is the part, not the dossier.** Free in git if designed in; expensive to
retrofit, because every consumer that pinned the whole dossier has to be found and changed.

The rolling-versus-sealed distinction is the same one `CATEGORIES.md` already worked out for `city`
documents (*"the last council agenda"* is a descriptor whose target moves, and a link to it goes
stale **by design**). A dossier on a living person is rolling. A dossier on a character in a shipped
game is sealed. The engine does not decide which; the dossier says.

## What it must refuse

**It does not speak.** The engine supplies what is needed to speak. The moment it grows an endpoint
that takes a prompt and returns text in a voice, it has swallowed the renderer, the chat service and
the worker pool, and it stops being a primitive. The operator's chat-service sketch is a *consumer*
of this, in the way stagecraft's remote renderer is a consumer of a project file.

**It has no front desk.** Inherited, non-negotiably, from the library's *no library card*. A dossier
must remain openable by somebody who never authenticated and never asked. Everything below respects
this or is wrong.

## The surface — three calls, and the reason there are only three

| call | returns |
| --- | --- |
| `list` | what dossiers are here. **Free** — enumeration is what a library already does |
| `resolve(address)` | the effective dossier, every part, with per-part provenance |
| `part(address, part, @pin)` | one part. The unit that grants and rate limits attach to |

This is the MCP surface too. *"Very concrete primitives"* is the operator's phrase and the three
calls are what makes them concrete: a thing an agent can enumerate, fetch whole, or fetch one facet
of, with a citation for each facet.

## Grants — already ruled, and mostly already built

The operator's two access cases both land on machinery that exists. Neither needs new design, and
saying so is more useful than designing them again.

**Private dossiers, API-driven, belonging to other people.** This is
[`GRANTS.md`](https://github.com/FCCN-ANTIBODY/library.anecdote.channel/blob/main/GRANTS.md) without
amendment: *the branch is the isolation, the encryption is the privilege, the grant is the key.*
The library holds ciphertext and serves it to anybody; the holder brings their own `age` identity,
minted on-device, gesture-gated by a passkey. **The passkey does not decrypt — it gates**
(invariant 4, *sign ≠ decrypt*). A private dossier is a public blob nobody else can open.

**Public dossiers, rate limited.** Worth being exact, because it is easy to state this in a way that
breaks the constitution. **Rate limiting is an edge concern, not a library concern.** It belongs to
whatever serves the bytes, it exists because bandwidth costs money, and it is never a statement that
reading is privileged. The proof that it stays on the right side of the line: a rate-limited public
dossier must still be obtainable by cloning the repository. If it is not, a front desk has arrived.

**The consumer's logs.** *"They might be the ones trying to capture all of their log stuff… we could
deliver the log if that's how they wanted to play it."* That is `data-pile`, maturity `running`,
*fork it, one per pile.* They hold their own; delivery is a copy, not an export path to build.

### One concrete trap in the satellite-page plan

*"The grant system gets you a satellite page on the outside that's authorized to do a thing, and we
can do that with passkey or whatever."*

A WebAuthn credential is usable only from an origin the **RP ID is a registrable suffix of**, the RP
ID is fixed at registration, and it is not re-scopable afterward. So:

- A satellite page at `satellite.<your-domain>` can use a credential registered at `<your-domain>`.
- A satellite page at **any other domain cannot**, ever, by any later decision.
- **An RP ID may not be a public suffix.** `github.io` is on the Public Suffix List, so two GitHub
  Pages projects under one account **cannot share a passkey** — each is stuck with
  `<user>.github.io`.

`GRANTS.md` already flags the third against the first worked fitting. The consequence for this plan:
**if satellite pages are meant to span properties, the whole thing needs a real domain under it, and
that decision has to be made before the first credential is registered, not after.** It is the
cheapest possible moment to know this and the most expensive possible thing to discover late.

## Where it lands, mechanically

Three positions, and only one of them should be taken now.

1. **An engine — take it.** `dossier.anecdote.channel`, mounted `.dossier-engine`, following the
   `.<subdomain>-engine` convention. This is where resolution, the three calls and the part grammar
   live.
2. **A category — do NOT take it.** `CATEGORIES.md` is explicit that taking a seventh word locally is
   the one act that cannot be undone from there, and **a dossier probably does not want a category
   word at all**: it wants to be filed *under its subject*. A dossier on a brand belongs with that
   brand's `trade/` holding; a dossier on a person is near `voices/` without being *people writing*.
   Only dossiers whose subject has no address of its own — a character in a lore set — actually need
   somewhere to go, and a shelf answers that without spending a reserved word. **Propose, as `land`
   was proposed. Do not take.**
3. **A repository — not yet.** The library's own rule: *folders, not repositories, until one earns
   it*, and *a thing earns its own repository when somebody wants to descend from it.* Nobody does
   yet. `git subtree split` preserves the history whenever that changes, so staying a folder is free
   and reversible, which is exactly the asymmetry the library keeps citing.

## Not decided here

- **Whether `subject` is a reference or a string.** A subject id that resolves to something (a
  person's `you` mount, a brand's node) is far more useful than an opaque string, and it drags in
  the `you` engine, which does not exist. The cheap version — an opaque id two dossiers can agree
  on — is not wrong, it is just less. Nobody has costed the difference.
- **Consent, as a mechanism rather than a word.** This document says a dossier on a living person is
  a different object and must say what the subject agreed to. It does not say what that record looks
  like, whether it is revocable, or what a resolver does when it is absent. **That is the gap most
  likely to be papered over by whoever builds first**, and it should be the next thing written.
- **Whether a dossier is a bottle.** It has custody, provenance and a signer list, which is the
  bottle shape exactly. If it is, transit is solved and this document has been describing a bottle
  schema without saying so. Nobody has checked.
- **What happens to a resolved dossier when a referenced part disappears.** Composition by reference
  buys reuse and buys dangling references with it, and a branding kit that silently loses its
  `stance` is worse than one that never had it.
