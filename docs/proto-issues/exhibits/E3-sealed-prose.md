# EXHIBITS 3 — sealed prose: the piece is an exhibit of itself, and publishing is key release

**Labels:** exhibits, data-pile, journal, anecdote
**Status:** proto-issue — nothing built. Sibling of `E1-sealed-exhibits.md` and `E2-image-exhibits.md`;
substrate is `../the-outbox.md`.

## The shape

E1 and E2 put **media** in a data-pile and disclose it selectively. This is the same move applied to
the **prose**.

> **A journal piece — ejected or not — is the manifestation of a data-pile fully revealed.**

The draft lives in the pile, encrypted. Publishing is **releasing keys**. Nothing else changes hands.

That collapses three things people currently think of as separate into one axis:

| what it looks like | what it is |
| --- | --- |
| a **draft** | nothing revealed yet |
| a **published piece** | every key released |
| a **redacted passage** | a span whose key was **not** released |
| an **ejected piece** | a disclosure state, not a structural difference |

**Redaction stops being an operation you perform on text.** You do not black anything out, delete
anything, or maintain a second "public version." You simply **fail to reveal a key** — and the
withheld span was never in a form anyone could read.

## Why this is stronger than blacking something out

A black bar is an **assertion**: *trust me, something was here.* A withheld key is a **proof**: the
ciphertext is present, inside the signed object, and its absence from your reading is verifiable
without anyone seeing it.

Three consequences worth having on purpose:

- **You can attest to what you did not show.** The unrevealed span is still covered by the same
  signature as the rest of the piece. "There is something here I have not shown you" becomes a
  checkable claim rather than a promise.
- **It is auditable later.** Release the key in five years and the plaintext verifies against the
  original signature — nobody has to trust that the disclosed version was faithful, because the
  disclosure and the original are the same object.
- **One mechanism for prose and media.** The article and its exhibits redact identically. No second
  redaction system to keep honest, which is the usual way redaction gets quietly wrong.

## It composes with the commit stream

`../the-outbox.md` establishes that a pile ingests **diffs**, not snapshots. This adds a second,
independent axis:

- **What exists** — append-only history, arriving as commits.
- **What is visible** — key release, monotonically increasing.

Neither runs backwards, and they do not interfere. A draft revised twenty times and published once is
twenty commits and one key release. **Publishing often is cheap and is not required.**

## The three things that decide whether it works

### 1. Key release is a one-way door, per span

Once a key is out, the plaintext is out forever — copies exist and still verify (§N). **Un-publishing
a passage is impossible**, and that is a sharper constraint than un-publishing a whole piece, which
people already half-expect to be irreversible.

This is correct behaviour, not a defect. It must be **stated at the moment of release**, not
discovered afterwards: revealing is the irreversible act, and it should feel like one.

### 2. Granularity is the whole design, and the wrong choice is unfixable

What is the unit — a paragraph, a sentence, a span? Too coarse and a name cannot be redacted without
losing the sentence around it. Too fine and there are thousands of keys and the ciphertext's own
structure becomes the leak.

### 3. **The shape of what you hid is visible even when the content is not**

This is the one that would embarrass someone who trusted it. *"Fourteen withheld spans in this
paragraph; the third is eight characters"* is a great deal of information about a redacted name.

E1 does not have this problem — audio chunks are uniform, so a gap says only *when*, never *what
size*. **Prose does not get that for free**, because natural-language lengths are meaningful. Any
scheme here has to pad to buckets, seal at a coarser unit than the sensitive item, or otherwise make
the withheld shape uninformative — and it has to be decided **before** anything is written, because a
corpus sealed at the wrong granularity cannot be re-sealed after the plaintext is out.

## Key management, without new cryptography

Publishing often means many reveals over time. That wants **derivation, not a keyring**: one root per
piece, per-span keys derived from it, so releasing a span is publishing a derived value rather than
tracking a growing list of secrets.

Invariant #8 holds — WebCrypto and HKDF-shaped derivation, nothing invented. D8's posture applies
unchanged: the keeper vends the capability, never the root.

## Open

- **Whether the withheld spans are enumerable at all.** Hiding *that* something is hidden is a
  different (and much harder) property than hiding *what* — and may be undesirable anyway, since the
  attestation value above depends on the reader knowing a redaction exists.
- **Whether a redaction can be scoped to an audience** — released to some readers, not others — or
  whether disclosure is only ever public. The pile can express both; the journal probably should not,
  and should say why.
- **What a reader sees.** A marker, a gap, nothing? Related to E2's rule that a derivation and an
  original must not look alike: a withheld span and an absent one must not either.
