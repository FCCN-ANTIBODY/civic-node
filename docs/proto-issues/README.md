# Proto-issues — design work kept in the repository

These are fully-drafted issue bodies, kept **in the repository on purpose**. This directory began
as a staging area awaiting transplant to real GitHub issues (the connector was unavailable when
they were written), but the posture has since inverted: the public issue surface proved to be
public *social* technology — skimmable, subscribable, and it drew real-world attention we didn't
want — so design writing now lives here as files, and GitHub issues are reserved for what is
urgent about the *current* implementation (see `AGENTS.md` → "Where the truth is"). Do not
transplant these out; drain a file only by doing the work it describes.

**Each file is one issue-shaped document.** It opens with the title (H1), a `Labels:` line, and
its body.

## Pending: `constitution/` — Milestone: CONSTITUTION (7 issues)

Source: [`anecdote docs/constitution-milestone.md`](https://github.com/FCCN-ANTIBODY/anecdote.channel/blob/main/docs/constitution-milestone.md)
(the twelve items) + [`OPEN-QUESTIONS.md`](../../OPEN-QUESTIONS.md) §S. The twelve items cluster into
seven issues where an item is one surface with another (map in each file's footer).

| File | Covers items | Workstream |
| --- | --- | --- |
| `constitution/C1-statements-that-resolve.md` | 2 + 8 | the statement grammar + the dropped-connection reason |
| `constitution/C2-co-authoring.md` | 3 + 4 + 5 | co-author with the labeler; bootstrap from tags; drift + revert |
| `constitution/C3-commingled-dna.md` | 6 (dep 1) | adopt a stranger's signed label; cascade-without-endorsing |
| `constitution/C4-the-baton.md` | 7 | one unit of work per platform gesture (unify with #75) |
| `constitution/C5-socialization-guarantee.md` | 9 | give-it-to-everyone, random-direction, no DNS |
| `constitution/C6-bind-the-queen.md` | 10 | the SW cuffed to our intent; seized-origin handcuff (§S) |
| `constitution/C7-stargate-and-home.md` | 11 + 12 | relocation via Castling; the self-signed HOME document (§S) |

Item 1 ("labels signed by their labelers") is deliberately **not** its own document — it is a
Dark Mode prerequisite consumed by C3; the signed-labels build must land with #80/#74.
