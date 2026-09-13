---
layout: one-message
permalink: /library/share/FCCN-ANTIBODY/
agents: https://github.com/FCCN-ANTIBODY/civic-node/blob/main/AGENTS.md
---

# FCCN-ANTIBODY

[The library](/library/) ·
[Adopting](https://github.com/FCCN-ANTIBODY/library.anecdote.channel/blob/main/ADOPTING.md) ·
[The org](https://github.com/FCCN-ANTIBODY) ·
[The node](/)

**A moniker group, on the `share/` shelf.** These are the repositories this node publishes
references to — held in order to be handed on, which is what
[`share/`](https://github.com/FCCN-ANTIBODY/library.anecdote.channel/blob/main/SHELVES.md) means.

An org name is not a category. It sits here, under a shelf, rather than claiming a word at the
library's top level — which is the change `SHELVES.md` was written to make possible.

> **This enumerates; it does not yet hold.** Every row below is a pointer. The bytes are on
> GitHub and not in this library, so nothing here can make the custody claim — *this library has
> it, and has had it since then*. Holding these as submodules is the next gesture and it is a
> decision with a weight attached; see "what holding would cost", below.

## The constellation

**A node is anyone running engines.** That is the whole definition — the kinds are vanity, and
`civic-node` is a *kind*, not a class of thing.

| repository | what it is | mounted here |
| --- | --- | --- |
| [`anecdote.channel`](https://github.com/FCCN-ANTIBODY/anecdote.channel) | the **offline origin** — the PWA and the shared instruments the engines are built from. Capability moves *here* | no; standalone |
| [`civic-node`](https://github.com/FCCN-ANTIBODY/civic-node) | this node, and the constellation's documentation home | it *is* this |
| [`tell.anecdote.channel`](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel) | the **mailbox** — collects replies, governs, seals to the pile, publishes | `.tell-engine/` |
| [`atlas.anecdote.channel`](https://github.com/FCCN-ANTIBODY/atlas.anecdote.channel) | a **directory of Tells**, and the reporting-law layer | `.atlas-engine/` |
| [`antidote`](https://github.com/FCCN-ANTIBODY/antidote) | the **archivist** — intake, plaque index, custody ledger, egress | `.antidote-engine/` |
| [`journal.anecdote.channel`](https://github.com/FCCN-ANTIBODY/journal.anecdote.channel) | content-less Jekyll machinery for a node's public record | `.journal-engine/` |
| [`library.anecdote.channel`](https://github.com/FCCN-ANTIBODY/library.anecdote.channel) | **this library's engine** — enumeration, admission, a clerk, and the reserved words | `.library-engine/` |
| [`bottles.anecdote.channel`](https://github.com/FCCN-ANTIBODY/bottles.anecdote.channel) | the **transit object** — a capsule that opens on a phone with no build step | no; draft |
| [`advocate.anecdote.channel`](https://github.com/FCCN-ANTIBODY/advocate.anecdote.channel) | **seats** — standing concerns that wake, think, and open pull requests | inside `.library-engine/` |
| [`data-pile`](https://github.com/FCCN-ANTIBODY/data-pile) | the durable, encrypted-at-rest **tank**. A template to fork, one per pile | no |
| [`judgement`](https://github.com/FCCN-ANTIBODY/judgement) | the summonable admission step: `accept` / `reject` / `needs-judgment` | inside `.tell-engine/` |
| [`jekyll-enough`](https://github.com/FCCN-ANTIBODY/jekyll-enough) | enough of Jekyll to build a site **in a tab**, with nothing installed | no |

The chain of authority, once: **the pile is the principal, the Tell is its agent, Atlas is the
reporting-law layer above them.** Antidote is the record of account beneath all of it.

**Two of these are mounted inside others and invisible from a `.gitmodules` at this root.** That is
what `vendored` means in
[`PEERS.md`](https://github.com/FCCN-ANTIBODY/library.anecdote.channel/blob/main/PEERS.md), and it
is said out loud because a reader who does not know will mount a second copy at a second pin and
the two will drift.

## What holding would cost

The honest version of the next step, so the decision is a decision and not a drift.

**Holding means submodules**, one per row, and a submodule is a pin somebody has to keep current.
Concretely: `git clone --recursive` on this node already pulls five repositories; enumerating
twelve here and holding them would make that a different-sized gesture, and this node's CI already
rolls pins forward on a schedule.

**It also buys the only thing an enumeration cannot.** A catalogue points; a holding can say *I
have had this since then*, and that claim is checkable by somebody who does not trust us. Whether
this node wants to make that claim about the org that runs it is a real question with a defensible
answer either way, and it has not been asked yet.

**A middle exists and is probably right**: hold the few this node actually serves from, enumerate
the rest. Nothing about the shelf forces all-or-nothing.
