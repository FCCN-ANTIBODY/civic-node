# Orientation

This repository is one **Civic Node**: a single installation meant to be copied — the workspace
that self-hosts all three roles (its own Atlas, its own Tell, publishing through Journal) and
fronts data-piles, coordinating the engines as hidden submodules (`.atlas-engine/`,
`.tell-engine/`, `.journal-engine/`, `.antidote-engine/`). It is also the constellation's
documentation home: the vision, the open questions, and the pipeline walk live here.

## Where the truth is, in reading order

1. **Demos before docs.** The constellation's capability index is the demo shelf in
   [`anecdote.channel`](https://github.com/FCCN-ANTIBODY/anecdote.channel) (`composer/*-demo.html`,
   `viewer/`, `git-enough/`, `reducer/demo.mjs` — its `AGENTS.md` carries the table). The demos
   are the representative, technical reflection of what the project can already do. Before
   designing a capability anywhere in the constellation, look for its demo: if the need category
   is represented, the machinery exists — compose it, don't rebuild it.
2. **Open issues are urgent** — a live problem with the current implementation, ahead of the
   deferred backlog. Roadmapping does *not* live in issues; it lives in the documents
   ([`VISION.md`](VISION.md), each repo's `ROADMAP.md`). Design writing is moving back into repo
   files, off the public issue surface — `docs/proto-issues/` is the in-repo home for drafted
   design work, and orientation content belongs in each repo's `AGENTS.md`, not in pinned issues.
3. **The deferred half lives in one place** — [`OPEN-QUESTIONS.md`](OPEN-QUESTIONS.md), the only
   open-questions list for the whole constellation. Record a deferral there so a solved item
   drops away from one file without rewriting vision prose.
4. **The whole picture, then the wire.** [`VISION.md`](VISION.md) is the constellation stated
   once; [`docs/PIPELINE.md`](docs/PIPELINE.md) walks the poll lifecycle literally, naming the
   file behind each step; `CONSTITUTION.md` is the binding law; `docs/TENANCY.md` is the hosted
   direction.

## The offline origin is the destination

Capability is migrating off GitHub and down to the operator's device — the anecdote.channel PWA,
the **offline origin**. The device is the second factor: signing happens in the offline app, and
whether or not GitHub holds the secrets to run a workflow, the offline origin does. The workflows
and composite actions across this workspace and its engines are being **kept as a declarative
definition of the pipeline** — a configuration input an operator or the offline origin can read
and mirror — not as the presumed runtime. Support them; don't deepen reliance on them. A new
capability should land as offline-origin code first, with the workflow as its declarative mirror.

## Invariants — violate these and you're building the wrong system

1. **Neighbors, not a graph.** No central authority, ever; one hop, no transitive reach; even the
   state is just an Atlas. "Above" is a position an operator occupies, never an enforced apex.
2. **Verify-from-anyone; trust decides *action*, not *admission*.** Verify the bytes for anyone; a
   local friend/lineage list gates whether you act.
3. **Witness, not judge.** Arrival and signature are attested; fitness is judged downstream. Never
   block a submission — the submitter learns the outcome instead.
4. **Sign ≠ decrypt.** Vouching for bytes and being able to read them are different powers; keep
   them separate at every tier.
5. **Honest defaults fire nothing.** Judges, thresholds, automation ship *off* until an operator
   sets policy.
6. **Attest before you run.** New conduct goes into the relevant `CONSTITUTION.md` in plain words
   before it is coded.
7. **Content-id is the join key.** `defaultHash(canonicalize(signed))` everywhere; never a second
   hashing scheme.
8. **No new cryptography without cause.** WebCrypto Ed25519, `age`, `ssh-keygen -Y`, `sha256` —
   compose these.

## Where intuition goes wrong here

- **Engines are hidden; content is canonical.** Each service's machinery is a submodule under a
  dotted `.X-engine/` dir; the freed top-level names (`journal/`, `atlas/`, `tell/`) are each a
  service's canonical prefix. Site-specific assets are synced in from `.journal-engine` at build
  time — change the engine, never the synced copies.
- **The workspace root is the publish root.** Disk path == URL path; the non-journal prefixes are
  pass-through, excluded from this node's Jekyll build and produced by their own engines.
- **History is the data model.** Per-paragraph git blame/history is generated into `_data/` and
  bound at build time.
- **Zero third-party vendors, on purpose.** Prefer the idioms already here over a dependency;
  keep changes small and legible enough for the next operator.
- **Replication is the test.** Would the next operator be able to copy this and understand it?

## Built here — reuse, don't rebuild

The engine actions this workspace composes (`antibody.yml`): the journal build + widget bake, the
tell ingress/deliver, the atlas match/widget, the antidote intake/heartbeat, and the
`advance-engine`/`advance-submodules` pin-rollers. The two operator notes —
`NONPROFIT.draft-0.md` and `ANTIDOTE.draft-0.md` — are draft-zero on purpose.
