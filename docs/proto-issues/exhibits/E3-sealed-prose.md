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

## The geometry: hiding a length while proving continuity

The requirement, stated exactly: **not so much hiding the size of a redaction as proving that the two
revealed ends are absolutely continuous with it** — that nothing was dropped between them and nothing
spliced in.

Those are two different problems and only one of them is about padding.

### Inflate the redacted region — but pad it with filler, not with your neighbours

The move is right: **do not seal a span at its own length.** Locate the thing, inflate it on **both**
sides until it fills a block, and render everything else unmodified. Adding to one end only would
still disclose where the secret sat inside the block.

One refinement. Spilling into the neighbouring text works, but it **spends revealed material to buy
concealment** — the absorbed neighbours are now inside the withheld block and cannot be shown. Pad
with **synthetic filler instead**: the block becomes `[filler][secret][filler]`, sealed as one unit,
and the surrounding prose is untouched and fully revealable. Same concealment, no revealed text
sacrificed to it.

### Use one global bucket ladder, not a grid sized per cut

*"It is incomprehensible that something else would line up on the same grid, we size relative for
this one cut"* — this is the one place the instinct goes the wrong way, and it is worth being blunt
about because it is unfixable later.

**A block size chosen relative to the thing it hides is derived from that thing, and therefore leaks
it.** A 3 KB block around a 2.9 KB secret says a great deal; so does a 32-byte one. Sizing per-cut
makes every block's length a function of its own content.

A **fixed global ladder** — 64 / 256 / 1 KB / 4 KB / … , the same for every redaction in every piece
— leaks strictly less: only *which bucket*, which is coarse by construction and identical across
unrelated cuts. Worst case costs under 2× the sealed bytes, and "something lining up on the same
grid" stops being a hazard because **everything is on the same grid on purpose.**

### Continuity is a Merkle problem, not a padding problem

Padding hides length. It says nothing about adjacency — and adjacency is the claim actually worth
proving.

Commit to the **ordered sequence of segments**: hash each one, build a Merkle tree over them, sign
the root once. Then:

- A **revealed** segment is handed over as plaintext plus its opening (the sibling path).
- A **withheld** segment is still present in the tree as a bare commitment.

A reader verifies that segment *i* (revealed), segment *i+1* (withheld), and segment *i+2*
(revealed) are **consecutive indices under the signed root**. That proves the two ends are continuous
with the hidden middle: nothing removed, nothing inserted, order intact — **without the withheld
plaintext, and without its true length** once the block is bucketed.

**No new cryptography** (invariant #8): `sha256`, a Merkle path, and the signature already in use. It
is structurally the same manifest E1 keeps over its audio chunks, which is a good sign — the media
and prose halves stay one mechanism rather than two.

### Multiple redactions compose because the manifest is fixed

*"You reveal everything except for it… you have to use a composite of all of them; doing multiple
passes is what reveals this behavior."* Exactly — and the manifest is what makes it tractable.

**A disclosure is a set of openings against a fixed signed manifest**, never a re-cutting of the
object. So: several redactions in one piece are several withheld indices; several renders over time
are several disclosure sets; a later, more generous release is a superset of an earlier one. Nothing
has to be re-sealed, and every past disclosure still verifies against the same root.

That is also what lets a render "pick a different slice" freely — **the slice is which openings you
hand over**, not a different cut of the piece.

### Two rules that follow, and one is a trap

- **The cut is fixed at seal time.** Re-cutting produces a different tree and invalidates every
  opening ever issued. This is `granularity is unfixable` from above, restated as a mechanical fact
  rather than a caution.
- **A redaction is ONE bucketed segment, never a run of them.** A long secret spanning six
  consecutive withheld segments discloses its length in segment count — the exact leak the bucketing
  was for, reintroduced through the index list. Inflate to the next bucket up instead of continuing
  into another segment.

### What still leaks, named on purpose

The **number of segments**, **which indices are withheld**, and **which bucket** each withheld block
falls in. That is: *how many redactions, roughly where, and coarsely how big.*

**"Roughly where" is wanted** — it is the whole attestation value from earlier in this document: a
reader must be able to see that a redaction exists in order for withholding to be a checkable claim
rather than a silent omission. **"Coarsely how big" is the residual cost**, and the ladder is the
knob: fewer, wider buckets leak less and waste more.

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
