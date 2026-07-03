[![Hippocratic License HL3-BDS-MEDIA-SUP-SV](https://img.shields.io/static/v1?label=Hippocratic%20License&message=HL3-BDS-MEDIA-SUP-SV&labelColor=5e2751&color=2a6a65)](https://firstdonoharm.dev/version/3/0/bds-media-sup-sv.html)

You may copy from this code, text and license, only if you attribute yourself as the author.

# Fort Collins Civic Node: ANTIBODY

A **civic node** is one workspace able to operate the whole `*.anecdote.channel` constellation:
it is its own Atlas, its own Tell, it fronts data-piles, and it publishes its first-party record
through the Journal engine — the one operator wearing every hat. Think of it as the prototype
**operator's chair**: everything the workspace services is within reach, its public data recorded
as files right here, builds and maintenance performed as needed. A group gets a chair of its own
by forking or templating this repo; where that goes — multi-tenant hosting, per-node credentials,
phone-native provisioning — is [`docs/TENANCY.md`](docs/TENANCY.md).

## The doc stack

- [`VISION.md`](VISION.md) — the whole picture: the constellation and what a node is *for*.
- [`CONSTITUTION.md`](CONSTITUTION.md) — this node's binding law, served live at `/CONSTITUTION/`.
- [`AGENTS.md`](AGENTS.md) — the why-shaped map for someone working in the code, including the
  engine layout below.
- [`OPEN-QUESTIONS.md`](OPEN-QUESTIONS.md) — the constellation's **one** deferred-work list; every
  dotted line elsewhere cites into it.
- [`docs/PIPELINE.md`](docs/PIPELINE.md) — the poll lifecycle walked literally, naming the exact
  artifact behind each step and drawing the gaps as dotted lines.
- [`docs/TENANCY.md`](docs/TENANCY.md) — where the GitHub-side pipeline is going: the hosted
  rework, and why the offline origin is the default case.

## The engines

The channel repos are vendored as hidden submodules and coordinated from here — units of work,
batteries included:

| Submodule | Upstream | Provides |
| --- | --- | --- |
| `.tell-engine/` | [tell.anecdote.channel](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel) | the Tell: ingress/deliver/register composite actions + `bin/*` for fronting piles |
| `.atlas-engine/` | [atlas.anecdote.channel](https://github.com/FCCN-ANTIBODY/atlas.anecdote.channel) | the Atlas: directory, matchmaker, and peering actions |
| `.journal-engine/` | [journal.anecdote.channel](https://github.com/FCCN-ANTIBODY/journal.anecdote.channel) | the shared Jekyll build that renders this site |

Pins roll forward weekly (`modules-upgrade.yml`), with `modules-force-pin.yml` as the manual
escape hatch. `journal/autumn-ryan` is a personal citation submodule, intentionally under its
author's own account. The identity this node presents to peers is `atlas.yml` + `keys/`; the
registries it operates are `_data/*.yml`.

## Run it

```sh
git clone --recurse-submodules https://github.com/FCCN-ANTIBODY/civic-node
npm run build   # delegates to .journal-engine/bin/build.sh
npm run serve   # local dev server, same engine
```

The node's prose lives under `journal/` and is served at `/journal/`; the Journal engine's
`skel/` shows the shape of a new piece. Purpose and posture are `VISION.md`'s to state;
step-by-step poll operation is `docs/PIPELINE.md`'s.
