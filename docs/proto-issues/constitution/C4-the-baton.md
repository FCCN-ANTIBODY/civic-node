# CONSTITUTION 4 — the baton: one unit of work per platform gesture

**Labels:** constitution
**Status:** proto-issue — transplant to a real GitHub issue, then delete this file.

Milestone: CONSTITUTION (`anecdote docs/constitution-milestone.md` → "The baton: focus-lock as
one-unit-of-work"). Unifies with Dark Mode #75.

## Context a cold agent needs (do not re-derive)

- **Verbatim:** your own labeler **cannot label everything — it has cycles too**; that backlog is fine
  if you have friends (§R), and it is the key to **focus-locking the offline client.** There is a
  **baton being held**: so long as the user holds it, the system does nothing. The **platform gesture
  is an interrupt** — the moment all platform layers converge and each does **one unit of work.** Doing
  things on your phone is what *gets things done*; consume a lot → turn a lot of gears → your inventory
  gets labeled. **Not everyone reads as much as they witness** — hence constitutions to **trim what we
  keep.**
- **The convergence:** the single-focus lock (Dark Mode #75), the crank (§Q/§R), and C2's co-authorship
  are the same mechanism — **the user's gesture is the clock, every layer ticks once per tick.**
- **What exists:** probe-line (`probe-line-v1.md` — capability-by-port, one op at a time); #75's
  single-focus app lock; anecdote `CONSTITUTION.md` bans un-confirmed event loops (the Mobile LLM
  clause) — the baton is how that ban becomes a scheduler.

## Do
- [ ] The baton primitive: no platform layer acts except on a user gesture; each gesture = one unit of
      work per layer (label one item, co-author one line, exchange one label, …).
- [ ] Wire the layers to it: reducer, co-authoring (C2), crank (§Q/§R), sync — all tick on the baton.
- [ ] The witness/read asymmetry: surface that you witness more than you can label, motivating the
      trim (C1 `I keep`/`I filter`).
- [ ] Tests: no layer advances without a gesture; one gesture advances each layer by exactly one unit.

## Constraints
No background loops (constitution). The baton is the scheduler — do not add a timer beside it. Unify
with #75, don't fork a second focus model. The gesture is consent (probe-line ladder).

Couples: #75 (single-focus lock), §Q/§R (the crank), C2 (co-authoring), §O. Items covered: 7.
