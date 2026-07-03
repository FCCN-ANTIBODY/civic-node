# Tenancy: collapsing the Computer pipeline into a hosted concept

This is a **direction note, doc-only**: it captures where the GitHub-side ("Computer") pipeline is
going and builds nothing; every unbuilt mechanism cites
[`OPEN-QUESTIONS.md`](../OPEN-QUESTIONS.md) **§P**. [`VISION.md`](../VISION.md) says why the
constellation is shaped this way; [`PIPELINE.md`](PIPELINE.md) walks today's operational order; the
Tell's operating postures — Hosted, Computer, Mobile — are pinned in
[`tell …/keys/README.md`](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel/blob/main/keys/README.md).
This note is the constellation-level continuation of that file's closing claim: **the workflow-less
operator is the end vision.**

## The premise: workflow secrets are parallel development

Every place a GitHub workflow needs an environment secret, we are developing something in parallel
that **never runs** if our users are phone operators instead of GitHub users. The canonical pain is
`age-keygen`: it wants a VPS-like environment, so an operator testing from an iPad ends up in a free
cloud terminal or a throwaway codespace — time-limited, useful in a pinch, and resolved by
**exfiltrating a private key**, which is exactly the gesture the design exists to avoid. At multiple
steps ([`PIPELINE.md`](PIPELINE.md) → "Owner-gated acts") a user must configure GitHub by hand because
automation rightfully can't do it for them — a PAT cannot be minted by a script. Scale that down to
its logical end and it fails immediately: **submission tokens per poll are non-viable on the first
go.** The offline origin has none of these steps — its keys are minted in the browser, gated by a
platform gesture — which is why it is the **default signing case** and the Computer track is the one
that must justify itself. (The Tell repo already states the halfway version: workflows are optional —
[`keys/README.md`](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel/blob/main/keys/README.md) →
"Workflows are optional.")

## The collapse

The more the Computer pipeline is traced, the more it wants to be **one thing, not a default**: a
**multi-tenant hosted concept**. Instead of every operator re-deriving the same secret chores, the
GitHub-must-run-things case becomes a *hosting* case, solved once, gracefully:

- how a GitHub repo **holds multi-tenant secrets when it must** — custody as a bounded, declared
  posture rather than an accident of accretion;
- how it **generates credentials that obviate host-level secrets for storing client secrets** — the
  host mints what a client needs instead of warehousing what a client owns;
- how it **safely reuses its keys when it's needful** — reuse as a rule, not a shrug.

All three are unbuilt — **┄ §P**. The recent shakeout that forced the question: a Tell running on
code from the other day would have been a **global registry for all polls ever made**, and had to be
taken down a notch to hold at least *per-node* credentials. There is no TLD registrar (as in the v0
vision) to evade the problem of group ownership, so the canonical site is a **multi-tenant host by
necessity** — and the credential layer has to say so out loud.

## Per-node credentials

"Per-node" means: a Tell holds credentials **for itself**, which it uses to service its multi-tenant
data-piles. Ownership of the Tell never grants reach into any pile — the Tell holds no key that reads
a digest ([`tell …/CONTRACT.md`](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel/blob/main/CONTRACT.md)).
The alternative — one central custodian minting for everyone, a GitHub App — was considered and
**rejected**; the rationale is pinned in
[`tell …/docs/submission-credential.md`](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel/blob/main/docs/submission-credential.md)
→ "Rejected," and this note does not reopen it.

This isn't a hypothetical posture. A Tell operator likely has a data-pile mailbox **on their own
Tell**, and the option to stack the hierarchy vertically on one node means plenty of **plural
operators** who expect to add someone else to a Tell they made. The multi-tenant case is native, not
exotic.

## No private Tells

There is no such thing as a private Tell — **just a Tell with no registrants.** Addressability is the
Tell's whole publicity; privacy is an empty registry, not a mode. This is what dissolves the
"personal Tell" instinct: the Tell in your phone was never specifically personal, it was just the
first singleton made, and a new one can be stood up beside it and used
([`anecdote …/docs/system-viewer.md`](https://github.com/FCCN-ANTIBODY/anecdote.channel/blob/main/docs/system-viewer.md)).

## The offline origin hosts many

The offline origin is seeking to contain **many Tell servers that it runs — like group chats it has
provisioned.** One device holds many Tell-twinned poll piles beside the private keyring
([`system-viewer.md`](https://github.com/FCCN-ANTIBODY/anecdote.channel/blob/main/docs/system-viewer.md);
an operator who holds a pile's `TELL_QR_SECRET` runs the whole loop — author → mint → answer → host →
tally — with the hosted Tell minting nothing). Atlases look much the same on the phone: a collection
of workspaces. And this multi-tenant case is instructive precisely because it is the **honest** one:
the device owner *does* have true access authentication to all the Tells it runs — while no one
Tell's ownership grants access into the data-piles behind it. That is the boundary the hosted
GitHub version must reproduce.

## PR-consent, represented offline

The GitHub PR pipeline for consent — propose, then a human merges — is represented in the
offline-origin model by **exchanging QR scans: open and merge, entirely between offline origins that
just exchanged id and receipt data.** This re-represents the registration idiom, it does not replace
it; the idiom family (canonical `bin/register` and its descendants) is inventoried at
[`OPEN-QUESTIONS.md`](../OPEN-QUESTIONS.md) **§B**. The exchange itself is **built** (rework
slice 4): anecdote's
[`composer/register-exchange.mjs`](https://github.com/FCCN-ANTIBODY/anecdote.channel/blob/main/composer/register-exchange.mjs)
carries all four family members as signed envelope + consent receipt, re-verifiable by anyone with
zero secrets, and a verified pair **replays onto the GitHub mirror as the ordinary PR idiom** — the
exchange moves where consent happens, never what the registries hold. The chamber UI and the
registry-side replay wiring remain **┄ §P**.

## Civic-node: the unit of group association

A civic-node is very lonely by itself — in private, with no friends hooked in, it is **just a
workspace**, which is where the Journal found its roots as the original content. But it is the
**fork/template basis for the primary unit of group association**: the prototype operator's chair,
with everything the workspace services within reach, its public data recorded as files right there,
builds and maintenance performed as needed, cron frequencies decided, new things added. All of that
was conceived as a GitHub-activity pipeline — and it is exactly what the offline origin is trying to
enshrine first. The two tracks are the same chair.

## The gate: provisioning data-piles in a rented interaction model

For any GitHub version of the bootstrap/maintenance work to be **of any effect**, it must be able to
provision *data-piles* in a rented interaction model. The Tell doesn't specifically need to do it —
the **workspace running it** does. The gate is now **open at the data-pile layer** (rework slice 3):
`data-pile bin/pile-new` is the one-gesture stand-up, and its `provision.yml` runs the same gesture
*for* someone — who hands over only a device-minted recipient (slice 2), because the custody rule is
enforced in code: **a provisioner never touches an identity.** What remains — the workspace-side
wiring, consent coupling, the richer rented lifecycle — is **┄ §P**; the direction stands: the
Computer pipeline's remaining investment points at hosting, not at more per-operator chores.

If pile management goes out to a market of hosts who want to run it, they are still solving
multi-tenant — and it must not be **possible** for them to solve it wrong: a third-party pile-manager
uses this spec, or gets its homebrew **attested in the metadata** when anything talks to it. The
grammar is **built** (rework slice 6: `provisioner:` + `provisioner_spec:`, stamped by our tooling,
travelling with the handshake entry and the offline exchange — data-pile `CONTRACT.md` → "The
provisioner attestation"); the richer claims-about-subjects form waits on real rented use. ┄ §P.

## What this demotes, and what stays

The offline origin drives signing as the **default case**. The Computer and Hosted postures stay
first-class — but as *mirrors* of gestures the offline origin performs natively, not as the primary
site of development. The per-Tell secrets already have their inventory and placement table in
[`tell …/keys/README.md`](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel/blob/main/keys/README.md);
what that table doesn't cover are the **constellation-level** credentials this workspace accretes:

| Credential | What it does | Offline mirror | Tracked |
| --- | --- | --- | --- |
| `SETUP_TOKEN` (pile) | writes the pile's own secrets at bootstrap — a PAT because `GITHUB_TOKEN` can't | none needed: keys mint in-browser, the trove is the store | §P |
| `TELL_PR_TOKEN` (pile) | opens the handshake PR on the Tell | QR-scan consent exchange (id + receipt) | §P |
| `ATLAS_PR_TOKEN` (node) | opens registration PRs on an Atlas (self-consent when self-listed) | same exchange, one tier up | §P |
| `CLOUDFLARE_API_TOKEN` / `_ZONE_ID` (node) | cache purge; worker deploys | n/a — serving substrate, not a signing gesture | — |

## Unbuilt, tracked

Everything this note points at that does not exist yet lives in
[`OPEN-QUESTIONS.md`](../OPEN-QUESTIONS.md) **§P**: multi-tenant secret custody; host-minted
credentials; key-reuse rules; rented pile provisioning (and the missing single-tenant automation
beneath it); spec-or-attestation for third-party pile-managers; the offline representation of
PR-consent; and `age-keygen` without a VPS.

## The road

The rework runs as **six slices**, each shipping alone, each killing a named pain on day one and
laying the beachhead for the next. One issue per slice carries its checklist, the way the
poll-lifecycle issues carry [`PIPELINE.md`](PIPELINE.md):

1. [#57](https://github.com/FCCN-ANTIBODY/civic-node/issues/57) — **shield the submission
   credential** in the Tell's own worker (pure relay; the credential still only knocks, `tok`
   still admits at ingest). Beachhead: the judge summoning point (§A).
2. [#58](https://github.com/FCCN-ANTIBODY/civic-node/issues/58) — **mint the age identity in the
   browser** (X25519 + bech32; the AEAD gap stays at the seal-enough export boundary). Beachhead:
   phone-native pile bootstrap.
3. [#59](https://github.com/FCCN-ANTIBODY/civic-node/issues/59) — **pile provisioning**:
   single-tenant automation (`bin/pile-new`), then rented — the gate, opened, with the host
   provably never holding `PILE_AGE_IDENTITY`.
4. [#60](https://github.com/FCCN-ANTIBODY/civic-node/issues/60) — **offline PR-consent**: the
   transfer envelope carries the registration entry, a met-record-shaped receipt comes back;
   open-and-merge as two signed halves (§B, member by member).
5. [#61](https://github.com/FCCN-ANTIBODY/civic-node/issues/61) — **custody and key-reuse made
   enforceable**: the tables plus the CI checks that hold them.
6. [#62](https://github.com/FCCN-ANTIBODY/civic-node/issues/62) — **spec-or-attestation** for
   third-party pile-managers, seeded minimally in slice 3b.

## Beyond the road

What follows the six slices is **Milestone: Dark Mode** — the offline origin fleshed out as its
own category, QR exchange proven in place of the PR mechanics this note demoted, and delivery
carried from Atlases and their friends. It is pinned at
[`anecdote …/docs/dark-mode.md`](https://github.com/FCCN-ANTIBODY/anecdote.channel/blob/main/docs/dark-mode.md).
