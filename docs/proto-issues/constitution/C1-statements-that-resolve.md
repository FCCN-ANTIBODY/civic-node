# CONSTITUTION 1 — the constitution model: statements that resolve a judgment

**Labels:** constitution
**Status:** proto-issue — transplant to a real GitHub issue, then delete this file.

Milestone: CONSTITUTION (`anecdote docs/constitution-milestone.md` → "Statements, not questions" +
"The thesis"). The grammar the whole milestone stands on.

## Context a cold agent needs (do not re-derive)

- **The thesis, verbatim:** if something as dumb as the labeler can write an effective constitution,
  governance is **not about the grace of our words, nor the motions of our hands — it is clear,
  objective statement of preference.** The plain statement is the **dropped-connection reason**: what
  a data-pile, a Tell, or a list gives back when it denies someone who reached your contact or became
  your neighbor. A question cannot resolve a judgment; a statement can.
- **Where judgment lives today:** `tell bin/govern` attaches `accept`/`reject`/`needs-judgment`/`held`
  against a pile's delegated per-poll constitution (`_data/constitutions/<pile>/<poll>.json`). This
  milestone's constitution is the *personal* analogue — the statements a member's own law resolves at
  their boundaries. Contrast (don't contradict): anecdote `CONSTITUTION.md` requires **polls** to be
  questions with write-ins; constitutions are the opposite register — **statements only**.
- **Masks and voices:** constitutions are authored and first-person (Atlas `CONSTITUTION.md`: *"I
  offer a line, not a gate"*). civic-node `VISION.md` is the constellation-law home (authored,
  speciation-not-amendment, exit system).

## Do
- [ ] The statement grammar: plain action words — `I ban` / `I filter` / `I keep` (extensible) —
      saying what you *don't* want by stating what you *do*, so a judge can resolve it.
- [ ] The judgment binding: how a personal-constitution statement is read at accept/deny (the same
      seam `bin/govern` / `bin/authz` expose — a pluggable judge over `{verdict, reason}`), producing
      the **dropped-connection reason** as machine-readable output.
- [ ] The document shape: signed, first-person, versioned (like a `constitution_sha`), served/held in
      the trove; a mask/voice field so it reads as authored, not configured.
- [ ] Tests: a statement resolves a deny with a legible reason; a malformed/question-shaped line is
      refused into a constitution.

## Constraints
Statements, never questions (that's the whole point). Authored, not a settings screen. The judge stays
pluggable/honest-default (§A). Versioned so drift is legible (C2). No new crypto.

Couples: C2 (authoring), §A (judge), tell govern/authz, VISION (authored law). Items covered: 2, 8.
