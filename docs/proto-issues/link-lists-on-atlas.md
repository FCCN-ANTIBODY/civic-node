# Link lists on Atlas — a second registerable kind, where the signature is over the LIST and never over the sites

**Labels:** atlas, directory, bottles, registration
**Status:** proto-issue — drain by doing the work it describes, then delete this file.

Milestone: none. Prerequisite for moving the directory role off `anecdote.channel`'s front page and
onto Atlas, which is the actual goal (see "The step this unblocks" at the bottom).

## The shape

Atlas lists **Tells** and nothing else, on purpose: `CONTRACT.md` → "Atlas does not register
data-piles directly." A Tell registers itself by opening a PR that appends its entry on a
`tell/<scope>/<id>` branch, **signed with its own delivery-signer key**. The branch names the claim,
the signature proves it, `signer:` anchors it in the open. **Ownership is the whole model.**

A **link list** is a second kind, and it does not fit that model — which is the interesting part
rather than a problem to paper over.

A link list is a small repository whose entire content is a list of places worth going. The person
who keeps it **does not own the sites in it**, and is not claiming to.

## The one distinction everything else hangs on

**The signature is over the LIST, never over the sites in it.**

A Tell's signature says *"this hub is mine."* A link list's signature says *"I assembled this, and I
stand behind having assembled it."* Those are different claims, and **conflating them is exactly
how a directory starts looking like it is absorbing other people's presence** — quietly enrolling
sites whose owners never spoke, and standing in front of them.

`anecdote.channel/config/sites.txt` already carries the right instinct for its own `to:` entries:

> *"Either way the listing says it leaves. Naming someone is not hosting them."*

Atlas needs to say the same thing structurally, not just in a comment: a listed link is a **pointer
authored by somebody**, attributed to them, leaving. Never an entry that reads as a resident.

## The storage shape: one file per domain

A link list is a repository where **the filename is the domain and the contents are plain text**.

```
example.org
another-site.net
some.city.gov
```

Deliberately not one file of many lines. **Per-domain files give per-domain history**: when an entry
was added, by whom, what the note said before, and whether it has been quietly rewritten. A single
text file collapses all of that into one blame lane, and the per-source visibility is most of the
value. It is also the simplest thing anyone could understand and keep by hand.

The contents are free text — a sentence about why, whatever the keeper needs. No schema until one is
earned.

## A link list is a bottle

Anyone can keep one, and it travels: a git tree is already a bottle payload (`git-enough`), so a
link list is an **offline-origin transmissible list of links**. Hand someone the bottle, they have
the list.

**This reuses the author/distributor distinction wholesale (D10 §3).** If a list gets adopted widely,
the keeper is still its **origin** — they keep dispatching updates, and adopters stay downstream of
someone identifiable. Somebody who re-mints their own version is a distributor of a new list under
their own signature. The list got loose and still has a source; that is the property worth having,
and no new mechanism is required to get it.

## Admission: constitution as defense, not as a gate someone operates

A Tell registration is judged. A link list mostly should not be.

The distinction Autumn draws is worth keeping in the constitution's own words: the choice is between
**an authority puppeting the constitution** — every entry waiting on someone's judgement — and
**people playing in the sandbox with the constitution as defense**, where admission is automatic and
the text is what you point at when something has to come out.

For a community directory the second is almost certainly right: an Atlas may **constitutionally
admit link lists without judgement**, because a list is attributed to its author and points away.
The blast radius of a bad entry is a link, and the author's name is on it.

What that requires, and none of it is new cryptography:

- The list's **author is signed and displayed**. Anonymous entries are a different question; do not
  answer it here by accident.
- **Removal is described before it is needed**, in the constitution, in plain words — invariant #6.
  An automatic door needs its exit written down first.

## Many lists into one directory

Several link lists funnel into one published directory, and **the civic node crunches and dedupes
them in slow motion** — a scheduled job, not a request path. Nothing needs to be fast; a directory
that settles over a day is fine.

Open, and worth deciding rather than defaulting:

- **What dedupe preserves.** If three lists name the same domain, the directory shows it once — but
  *whose* entry, and does it keep all three attributions? Losing the attributions collapses back
  into "Atlas says this site is good," which is the failure this whole design avoids.
- **Whether a list can be listed without being merged in** — displayed as itself, attributed, rather
  than dissolved into an aggregate. Probably yes, and probably the default.

## Posting a list as a long-lived anecdote

The other route to the same place: an **anecdote** that points at a link-list bottle — *"here is the
bottle with the links I think matter"* — posted to a board and left up, long-lived.

Atlas only carries traffic **through a Tell** (it does not post outsider traffic), so an anecdote of
this kind arrives via a Tell that Atlas lists. **`constellation.anecdote.channel` now runs exactly
such a Tell** and has no other job yet, which makes it the obvious first sender and a real use for
a mailbox that otherwise has none.

**Unsolved, and named on purpose:** identifying the owner of a long-lived posting while it is up.
Provenance is knowable — it came through a named Tell — but a Tell that publishes from several
branches makes "which one is canonical for what Atlas published" ambiguous. Esoteric today; it
stops being esoteric the moment many sources funnel into one.

## The step this unblocks

`anecdote.channel`'s front page is serving the directory role today and is not ready to be a front
page. The goal is to **make Atlas the thing actually doing it** and have `anecdote.channel` show
Atlas's output rather than keeping its own second copy — one directory, one truth.

The mechanism already exists and is not a raw iframe: **Atlas ships `widget/public.html`**, and the
node already mounts widgets this way (`civic-node/_includes/widgets/`). So the sequence is:

1. **This** — Atlas gains the link-list kind and publishes the aggregate.
2. `anecdote.channel` mounts the Atlas widget where its own directory renders now.
3. `config/sites.txt` becomes one registered link list among others, rather than the only directory
   there is.

Step 2 cannot come first: Atlas lists no Tells yet and `admitted.json` is `[]`, so embedding it
today would replace a working directory with an empty one.
