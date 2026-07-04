# CONSTITUTION 6 — bind the queen serviceworker

**Labels:** constitution
**Status:** proto-issue — transplant to a real GitHub issue, then delete this file.

Milestone: CONSTITUTION security premise (`anecdote docs/constitution-milestone.md` → "For agents —
the collapsing-universe premise"; `OPEN-QUESTIONS.md` §S). A prerequisite to calling CONSTITUTION
*secured*.

## Context a cold agent needs (do not re-derive)

- **Verbatim:** the service worker must do **only what we want** — cuffed to our intent, side-channels
  in the elevated environment closed (**CSP is the current imagining, not the whole list**). If the
  origin is **seized**, whoever holds it can serve a **new worker that does other things**; **software
  updates are unavailable except by the direct socialization** this milestone requires (C5). If seized,
  **handcuff the captor to our work** — even having them **sign our clearly-poisoned artifacts**, a
  **call for aid** (restoration-by-update).
- **What exists:** `origin.md` (firmware pin + SW enforcement; the possessed-origin case it calls
  *unpreventable* is exactly what this answers); `gesture.mjs` names the swapped-SW **"queen"** and
  gates the device key so a queen can't act as you; `consent-surface.md` (defense-in-depth Layers
  A/B/C, the authority journal where deletion leaves a scar).

## Do
- [ ] Enumerate + close the elevated side-channels beyond CSP (the "not the whole list").
- [ ] The queen-binding: the SW provably able to do only sanctioned work; a swapped/foreign SW is inert
      against the gesture-gated identity (extend `gesture.mjs`).
- [ ] The seized-origin protocol: handcuff (make the captor's serving useless without our consent) +
      the **poisoned-sign call-for-aid** (a signal others read as "restore me").
- [ ] Tests: a foreign SW cannot act as the user; a poisoned artifact verifies as a distress signal,
      not as trusted content.

## Constraints
Honest about the unpreventable (origin.md): a possessed origin re-serving `sw.js` can't be *prevented*
— this raises the cost and adds detection/distress, defense-in-depth not a magic gate. The pin is the
floor. No new trust root the queen could forge.

Couples: origin.md (pin), consent-surface.md (layers), gesture.mjs (queen), §S, C7 (relocation).
Items covered: 10.
