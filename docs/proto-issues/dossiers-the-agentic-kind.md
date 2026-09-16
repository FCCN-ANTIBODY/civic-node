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

## The word is already canon, and it was not mine to coin

**Amended 2026-09-15.** The sections above reasoned their way to `dossier` from first principles
without checking, and the check was owed. The word is **already accepted vocabulary in this
constellation**, in `anecdote.channel/docs/decisions.md` **D9 · The you namespace — masks, and the
dossier a user keeps about the web**, accepted 2026-08-31:

> *A label that is a registrable domain, kept intact left-to-right (`example.com.you.<apex>`), is the
> user's **DOSSIER about that site**: notes, drafts, cached finds, unreleased posts — out of band, on
> an address that never pings the subject.*

**That is the keystone of this document, already ruled, three weeks earlier.** *An address that never
pings the subject* and *"profiles that cannot be hidden from their owner or discovered by their
subject"* are D9 saying *a dossier is about a subject and is not the subject*, in its own terms.

**And `persona` is canon too, as the opposite thing:** *"A single invented label is a MASK — a persona
surface the user curates and can switch at will."* So the operator's instinct — that persona names
something you put on and switch, while dossier names a record about a subject — is not a preference
arrived at in conversation. **It is the distinction this constellation already made and wrote down.**

### What is left for this document to add, which is narrower than it was

D9's dossier is one instance: **subject = a website, compiler = the user whose `you` space it is.**
This document generalizes exactly one axis — **the subject need not be a site.** A person, a brand, a
character, a lore set, a band. Everything else D9 already decided and should be cited rather than
restated.

Two things fall straight out of the reconciliation:

- **D9 encodes the subject in the address** (the registrable domain, left-to-right, *"the familiar
  reading order is the point"*), and the compiler is implicit in whose space it is. That is
  `subject × compiler` with the pair spelled in DNS. For subjects that are not domains the address
  trick has nothing to bite on, **which is why a non-site dossier needs an explicit subject id and a
  site dossier does not.** That partly answers §*Not decided*'s first question: for site subjects, the
  subject is already a reference rather than a string.
- **D9's depth rule binds.** *"Depth stops at the registrable domain… anything deeper is a path inside
  the dossier origin, never more DNS."* A dossier library that wanted a DNS name per member of a band
  would hit the same wildcard-per-subject cost D9 rejected. **Members are paths, not labels.**

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

### Deployment: do not raise the Public Suffix List here

**A previous revision of this document raised the PSL/`github.io` constraint against the satellite-page
plan. That was wrong and it is retracted.** The facts were accurate and the framing did not reach this
constellation, which does not deploy on GitHub Pages and owns the domain the question is about.

The strategy is **flooring** — `anecdote.channel/docs/flooring.md`, implemented as the Floor in
`tell/docs/floor.md`: one identical page served at every label under a Cloudflare wildcard, nothing
provisioned ever, the label chosen rather than allocated. A satellite page **is** a floor, and the
operator's *"the grant system gets you a satellite page on the outside that's authorized to do a
thing"* is the springboard clause exactly: a floor's job ends when the grant is held.

Two consequences that do bear on dossiers, and neither is an obstacle:

- **One-key-one-service is the goal.** A credential scoped so it cannot wander is what a dossier
  consumer should want: a grant on *this* dossier, not on everything the compiler holds.
- **A label is a rendezvous, never a capability.** Anyone who types it gets the same tile. **So a
  dossier must never be protected by its address being hard to guess** — the privilege lives in the
  encryption, exactly as `GRANTS.md` already rules, and a floor is not a place a secret is kept.

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

## Citation is the composition mechanism, and the contract is already written

Amended 2026-09-15, from the operator's worked case:

> *"Say it's a band. I have a dossier that wants to cover each of the individuals, but there really
> would be a dedicated one somewhere else… it's a crossover and they were in a band. But it's not
> the canonical way you'd look them up. I would expect the group dossier to be capable of doing
> citations."*

This corrects §*Composition* above, which said **reference** where it should have said **citation**,
and treated the distinction as cosmetic. It is not. A reference is a pointer that resolves at read
time. A citation is *a claim about a source, at a version, carried with the thing that cites it* —
and the second one is what a band dossier needs, because the whole point is that it works when the
member's own dossier is somewhere else, private, moved, or gone.

**The contract for this exists, is running, and was written for exactly this hazard.** The journal
engine's `bin/build-intermediates` is *"the portable form of what a journal has cut — arrangement
and recorded pins, never prose."* Every property the band case needs is already a decided rule
there, with its reasoning attached:

| journal | dossier | the property |
| --- | --- | --- |
| an issue | the group dossier (the band) | the arrangement |
| a cited piece, carried beside it | a member dossier, carried reduced | *"the tier above bakes the issues and has to see the letters"* |
| the recorded pin | which version of that member this band asserts | *"the pin is the point"* |
| dropped `permalink` / `redirect_*` | **the carried member is not the lookup** | see below |
| refused piece named, skipped, issue ships | a member that can't be carried doesn't sink the band | `--strict` for callers who'd rather stop |

### The reduction rule *is* "not the canonical way you'd look them up"

This is the sentence to read twice, because it means the operator's requirement is not something to
design — it is a property that already falls out:

> *What travels is the piece reduced: its OWN front matter (title, author, date, tags — the keys
> that describe the piece and travel with it anywhere) and its body. What is dropped are the CLAIMS
> ON A URL SPACE — `redirect_from`, `redirect_to`, `permalink` — which belong to whichever site first
> published the piece and are meaningless anywhere else.*

Applied to dossiers: **the descriptive keys travel and the address does not.** The band's carried
copy of a member has no permalink, so nothing can route to it and it cannot be mistaken for the
canonical dossier — which keeps its own address, wherever it lives. *"The layout goes too — a piece
must not have to know who is publishing it"* is the same rule again: a member dossier must not have
to know it is being cited by a band.

And the reasoning given for the rule is the crossover case in its general form: *"two journals citing
the same piece would both claim the same ones."* Two bands citing the same session player, and
neither gets to own them. **The property is enforced by construction rather than by convention**,
which is the difference between a rule and a hope.

### The pin closes an open question this document had

§*Not decided* previously asked what a resolver does when a referenced part disappears. Citation
answers it, and the answer is better than the question deserved. The pin *"says which exact words
ran, so a third party's rendering is checkable against ours; it makes staleness visible when an
outer build picks up an intermediate older than its source; and it is the same pin that makes
publishing, editing, and withdrawal one mechanism rather than three."*

So: a band dossier holds the member **at a pin**, the bytes are carried, and the member's dossier
vanishing does not break the band — it makes the band's copy *visibly* the version it cited. **A
withdrawn member dossier is handled by the same mechanism as an edited one**, which is the third job
and the one nobody would have designed on purpose.

### Where they go, and why the journal need not be installed

`build/`, per [`SHELVES.md`](https://github.com/FCCN-ANTIBODY/library.anecdote.channel/blob/main/SHELVES.md),
which was written for this exact failure: a pin is a promise something is retrievable, `build/` holds
the retrieved thing, and it is *"deterministic by path, not merely present — the path is part of the
artifact,"* so two builds cannot end up sharing one artifact with nobody able to say which produced
it.

**The operator's framing — *"not because the journal has to be installed"* — is the load-bearing
part, and the intermediates contract already honours it.** What `build-intermediates` emits is
INERT: front matter plus plain markdown, no template syntax, *"so a consumer needs to trust nothing
to render it."* The dependency is on **the artifact shape, not the producer.** A site with the
journal builds these; a site without it reads them; a thin carrier holding the bytes and running
none of the services still works. That is the same argument `_fragments/README.md` makes for
committing prebuilt fragments — *"a clone that had to build these would be a node that cannot say
what it is."*

## Two hazards citation introduces, and only one of them is already solved

### The group dossier is the leak vector

**Citation composes. Privacy does not compose with it, and nothing catches that by default.**

A public band dossier that carries a reduced copy of a member's *private* dossier has published it.
The grant machinery is untouched and correct — the member's own dossier is still ciphertext on its
own branch — and it does not help at all, because the leak is a plaintext copy sitting in `build/`
that nobody had to decrypt.

This is not a new class of problem here and the answer already has a shape. `_fragments` has a verb
for precisely this question — `bin/fragments audit` — *"did anything marked private get in?"* And
the enforcement doctrine is stated in the same file and should be copied verbatim rather than
reinvented:

> *`library/` is never a publisher's input. **Not filtered — absent.** That is the whole safety
> property, and it is enforced here, once, at generation time, rather than by every template
> remembering to.*

So: **a dossier build refuses to carry a part whose grant is not satisfied by the audience of the
build**, decided once where the artifact is generated, and never by whatever renders it. A band
whose member is private ships the band with the member *named and absent* — which the refusal path
already supports, because a refused piece is named, skipped and reported while its siblings ship.

### The ejection gate has an agentic twin that the same check does not catch

`write_piece` refuses a carried piece containing template syntax, and the reasoning is exact:

> *A mounting site builds what it is handed, and a piece's `{% include %}` is evaluated in THAT
> site's build, against ITS includes, ITS plugins, ITS filesystem. A contributor writes the letter;
> they do not get to run a step in the newsroom's build.*

**A dossier is consumed by a model, and the same sentence holds with "build" replaced by "run."** A
carried `stance` or `register` is text that reaches an agent — that is the entire purpose — and text
that reaches an agent can attempt to reach its instruction channel. Scanning for `{% %}` does not
see this, and no scan reliably does.

The constellation's existing answer is the right one and it is a posture rather than a filter:
`station-node/library/INERT.md` —
*instruction files inside held projects are never consulted, not followed and not read in order to
judge.* **A carried dossier is data, never instruction**, and the engine that resolves one must hand
it to a consumer as quoted material with its provenance attached, never as something merged into a
system prompt.

This is the sharpest reason the three calls in §*The surface* return **parts with provenance** rather
than an assembled prompt. An engine that returned the latter would have made this hazard its
users' problem while looking more convenient.

## Not decided here

- **Whether `subject` is a reference or a string — now half answered.** D9 settles the site case:
  the subject *is* a reference, spelled as the registrable domain in the address. What is open is
  the rest — a person, a brand, a character have no equivalent canonical address, and the `you`
  engine that would give a person one does not exist. **Citation sharpens it further:** a carried
  member is identified by pin, which is precise about *which bytes* and silent about *who*, so two
  bands citing the same session player still cannot tell they did.
- **Consent, as a mechanism rather than a word.** This document says a dossier on a living person is
  a different object and must say what the subject agreed to. It does not say what that record looks
  like, whether it is revocable, or what a resolver does when it is absent. **That is the gap most
  likely to be papered over by whoever builds first**, and it should be the next thing written. It
  is now also more urgent: a group dossier compiles a citation about a person into somebody else's
  build wing, and consent to be *in a dossier* is not obviously consent to be *carried*.
- **Whether a dossier is a bottle.** It has custody, provenance and a signer list, which is the
  bottle shape exactly. If it is, transit is solved and this document has been describing a bottle
  schema without saying so. Nobody has checked.
- **What the audience of a build is, mechanically.** The refusal rule above is stated as *a part
  whose grant is not satisfied by the audience of the build*, and nothing anywhere defines that
  audience. It is probably a `disposition:`-shaped label, since
  [`residency.yml`](https://github.com/FCCN-ANTIBODY/library.anecdote.channel/blob/main/residency.yml)
  already separates *held to be handed on* from *served to anyone*. Probably is not a design.
