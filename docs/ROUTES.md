# Two routes, one lifecycle

Every stage of the poll lifecycle has one **equivalent need**. The **GitHub route**
(the Computer/Hosted postures) meets it with repos, workflows, and secrets; the **offline
origin** (the Mobile posture) meets the same need with device keys, the trove, and scans.
This note maps them side by side, stage by stage, and marks every place a **Cloudflare
worker** participates — the workers are the seam between the two.

It is **doc-only**: it composes [`PIPELINE.md`](PIPELINE.md) (the walked lifecycle),
[`TENANCY.md`](TENANCY.md) (where the GitHub route is going), and
[`tell …/keys/README.md`](https://github.com/FCCN-ANTIBODY/tell.anecdote.channel/blob/main/keys/README.md)
(the three postures). Marks: **─** built · **┄ §X** open, cited into
[`OPEN-QUESTIONS.md`](../OPEN-QUESTIONS.md). Slice numbers refer to the rework road
([`TENANCY.md`](TENANCY.md) → "The road", issues #57–#62).

**The shape to notice before the detail:** the routes converge at exactly **one point —
the answer runtime (stage 5)** — and diverge everywhere else. Every GitHub-route stage
costs a hand-minted PAT or repo secret; every offline-route stage meets the same need with
a device key behind a platform gesture. That asymmetry is TENANCY's whole argument, visible
as a column.

---

## 1 · Stand up the tank

**Need — an encrypted pile + an identity only the owner holds.**

- **GitHub:** `data-pile bin/pile-new --keygen` (or `setup.yml`) — repo from template,
  `age-keygen` on a runner, identity stored as the `PILE_AGE_IDENTITY` secret; needs a
  hand-minted `SETUP_TOKEN` / `PILE_NEW_TOKEN` PAT. ─ (slice 3). Rented: `provision.yml`
  runs the gesture *for* someone — recipient-only inputs, and a provisioner **cannot**
  keygen, enforced in code. ─ (slice 3)
- **Offline origin:** `anecdote …/composer/age-mint.mjs` — the X25519 identity mints in the
  browser (platform WebCrypto, byte-interoperable with real `age`), lives in the trove
  gesture-gated; only the *recipient* ever crosses. No PAT, no VPS, no repo secret at all.
  ─ (slice 2). The trove itself is the repo: `git-enough` phases 0–3. ─

## 2 · Register with the Tell

**Need — consent, recorded: the pile proposes, the hub's human accepts.**

- **GitHub:** `handshake.yml` opens the PR onto the Tell's `_data/piles.yml`
  (`TELL_PR_TOKEN`); **the merge is the consent**; the signer fingerprint is pinned by hand,
  confirmed out-of-band. ─ · claim validation ┄ §B
- **Offline origin:** `composer/register-exchange.mjs` — the entry travels as a signed
  envelope (open), a consent receipt comes back (merge): two scans, verifiable by anyone,
  zero secrets. A verified pair **replays onto the mirror** as the ordinary PR. ─ (slice 4)
  · chamber UI ┄ §P

## 3 · Author the poll

**Need — a question in its fewest-verbs form, with delegated rules.**

- **GitHub:** constitution JSON at `_data/constitutions/<pile>/<poll>.json` (PR-reviewed);
  `bin/open-poll` opens the canonical issue. ─ · still three hand-acts — one-gesture
  authoring ┄ §J
- **Offline origin:** the `reducer/` shapes the utterance, the composer routes it; the poll
  as a data object backed by the origin — *"what tell.anecdote.channel is becoming: the
  poll-authoring app"* (`anecdote …/docs/system-viewer.md`). ─ core · ┄ shaping

## 4 · Mint the QR

**Need — a bearer token bound to {pile, poll, round}, plus provable origin.**

- **GitHub:** `qr.yml → bin/qr` with `TELL_QR_SECRET` as a repo secret; provenance signed by
  the delivery signer; `--submit-url` now mints a worker address instead of embedding a
  credential. ─ (slice 1)
- **Offline origin:** `composer/qr-mint.mjs` — **byte-parity** with `bin/qr`; the secret
  stays Elevated on the device (a powerless chamber can request a mint but never sees it).
  The Tell mints nothing. ─

## 5 · Answer — where the routes converge

**Need — a reply reaches the mailbox without exposing anyone's credential.**

Both routes land in the **same runtime**, `anecdote.channel/poll.html`; only the transport
differs:

- **GitHub:** the respondent's **own account** posts — a prefilled `issues/new` / comment
  link; the click is theirs; their account is the spam shield. ─
- **Offline origin:** **no account at all** — the runtime POSTs through the Tell's relay;
  the client holds no token. Legacy fallback: the `post=` credential in the QR, public by
  design. ─ (slice 1)

> ⚙ **submit-gateway** — *the only secret-bearing worker.* Holds `TELL_POST_TOKEN`
> per-Tell; a **pure relay**, path-allowlisted to one repo's issues, holding no
> `TELL_QR_SECRET` and doing no admission — the credential knocks, `tok` still admits at
> ingest. Future judge *summoning* point (┄ §A), never a decider. Deploy pending
> (`wrangler secret put`).

## 6 · Ingest, judge, seal, publish

**Need — authorize each reply, attach the verdict, seal to the pile alone.**

- **GitHub:** `ingest-submissions.yml` → collect → `authz` → `govern` → `deliver` →
  finalize, publishing onto `feed/<scope>/<id>`. ─ · producer cron deliberately off ┄ §K
- **Offline origin:** the mirror inverts — GitHub is the **dumb mailbox**; the origin
  fetches replies back and collates on-device, verifying `tok` + provenance where the
  operator is. Buffer + daily-cron agent ┄ §F (the end vision `keys/README.md` pins)

> ⚙ **feed-gateway** — stateless, not load-bearing. Serves the sealed feed on the Tell's
> own domain (`/piles/<id>/feed/*`), stamps `X-Tell-Vouch` as a *projection* of the signed
> manifest — never a new source of truth. Holds no secrets; the pile can always pull raw
> instead.

## 7 · Pull, verify, decode

**Need — a durable, verified tank only its owner can read.**

- **GitHub:** `ingest.yml` (hourly cron) pulls + `bin/verify` (signature, hash chain,
  ratchet commitments); `bin/decrypt` reads with the `PILE_AGE_IDENTITY` repo secret. ─
- **Offline origin:** the identity never left the trove — decrypt happens where the
  operator is. The origin also hosts the pile itself and fetches deliveries back
  Castle-style (many Tell-twinned piles beside the keyring). ─ core · ┄ integration

## 8 · Be discovered

**Need — listed and addressable: Tell → Atlas, Atlas ↔ Atlas.**

- **GitHub:** `bin/register` / `bin/register-atlas` — the branch name carries the claim
  (`tell/<scope>/<id>`), the signed commit proves it, a human merges. ─ · validation ┄ §B
- **Offline origin:** the same exchange grammar as stage 2 — the `tells` and `atlases`
  family members ride the identical envelope + receipt, replayable to the same branches.
  ─ (slice 4)

> ⚙ **piles-gateway** · **scan-router** — stateless, Atlas-side. `piles-gateway` serves
> each pile's coarse public map from the Atlas domain (no repo token; the payload is
> already public). `scan-router` geo-routes a locator QR to `<stem>.<state>.…` — **built,
> not yet on a route** (┄ §H; the one step to live scan resolution).

## 9 · Report upward

**Need — constituency figures without constituents: pool, suppress, prove.**

- **GitHub:** the Atlas pool aggregates de-identified Tell summaries with small-N
  suppression; the pile backs any figure via `bin/prove` (─). The aggregator itself ┄ §C
- **Offline origin:** same open question, same locus — reporting law lives at the Atlas
  tier on either route; device-side vouch is a forward seed. ┄ §C

---

## The workers, inventoried

| Worker | Domain / route | Secrets held | Job | Status |
| --- | --- | --- | --- | --- |
| `submit-gateway` | tell · `/submit` | **`TELL_POST_TOKEN`** (per-Tell) | credential-shielding relay — knocks only; admission stays at ingest | ─ built · deploy pending |
| `feed-gateway` | tell · `/piles/*` | none | serve the sealed feed; project `X-Tell-Vouch` from the signed manifest | ─ built · not load-bearing |
| `piles-gateway` | atlas · `/piles/*` | none | serve each pile's coarse public map from the Atlas domain | ─ built |
| `scan-router` | atlas · root | none | geo-302 a locator QR to the right state hub | built · **not routed** ┄ §H |
| judge *(future)* | summoned at submit-gateway | tbd — per-node custody | request-time fitness/geo gate over the `{verdict, reason}` contract — summoned, never deciding alone | ┄ §A |

The taxonomy: **stateless projections, plus exactly one credential-holder** — the one that
holds a secret exists so that no client ever has to. Each worker's secret (or lack of one)
is declared in its repo's `keys/custody.yml` and enforced by `bin/check-custody` (slice 5).
