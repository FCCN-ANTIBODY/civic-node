# CONSTITUTION 2 — co-authoring the document with the labeler

**Labels:** constitution
**Status:** proto-issue — transplant to a real GitHub issue, then delete this file.

Milestone: CONSTITUTION (`anecdote docs/constitution-milestone.md` → "Constitution as a rough
assembly", "Co-authorship, at the moment", "From assigned shapes to chosen ideas"). Depends on C1
(the grammar it writes in).

## Context a cold agent needs (do not re-derive)

- **The bootstrap, verbatim:** a constitution starts as a **rough assembly of all the tags you have
  ever filled** — from that raw pile you **draft what you think you mean.** You begin with *shapes*
  (the constituencies you're assigned by location), reach the *idea constituencies* you choose, and
  end holding a law that is **acceptances of others' labels** — like **adopting the accent you want.**
- **Co-authorship, verbatim:** the labeler **suggests a line and you write a line at the same time**;
  you **pick or pass**; it proposes your **oldest lines for removal-or-keep.** Every turn gives you a
  chance to write something else in. Maintenance is the co-authored moment, not a periodic chore.
- **Drift, verbatim:** **noticing your preferences have changed is a good thing to be conscious of** —
  if you like an old line better you can **change it back.**
- **What exists:** `anecdote reducer/` (the labeler + local domain-scoped cache); the probe-line
  compose/confirm split (`poll.compose` preview → `poll.submit`, `probe-line-consent.md`) is the exact
  pick-or-pass posture; the constitution is held in the trove (git-enough, so versions/revert are
  free — old refs never lost).

## Do
- [ ] Bootstrap: assemble a draft constitution from the member's accumulated tags/labels.
- [ ] The co-authoring surface: labeler-suggests-a-line ∥ you-write-a-line, pick/pass, oldest-lines
      up for removal-or-keep — as probe-line ops (compose = the suggestion, confirm = pick/pass).
- [ ] Drift + revert: surface when preferences have shifted; keep prior versions (git-enough refs);
      one-gesture revert to an older constitution.
- [ ] Tests: a bootstrap produces a valid C1-grammar draft; a revert restores an exact prior version.

## Constraints
The labeler proposes, the human disposes — never auto-writes law. Reversible always (the trove keeps
every version). Not homework: co-authoring rides the baton (C4), one line per gesture. On-device (§O).

Couples: C1 (grammar), C4 (baton), §O (the instrument), reducer. Items covered: 3, 4, 5.
