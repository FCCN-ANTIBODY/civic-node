# dossiers-ui — a dossier served on `.local`, for a phone on the same wifi

    ./serve                      # sample/ on :8788
    ./serve --root ~/somewhere --port 9000

Prints the three URLs it is reachable at, including this machine's `.local` name.
Open that one on the phone. Same wifi is the only requirement — no tunnel, no account,
nothing provisioned.

## What it is

`serve` is ~110 lines of stdlib Python (`/usr/bin/python3`, no dependencies, no venv). It
**enumerates the tree on every request** rather than building anything, so adding a file and
pulling to refresh on the phone is the whole edit loop.

    <root>/<dossier>/<fragment>.md      the fragment name is the filename. Nothing validates it.
    <root>/<dossier>/_node.json         optional. What the NODE observed — never dossier content.

`index.html` is one file with no dependencies and no build. It reads `/index.json`, fetches each
fragment, and renders. The markdown it understands is paragraphs, `**bold**` and `*italic*` —
deliberately less than a build step, because fragments are prose.

## What it deliberately is not

- **Not a write surface.** It serves `GET`, never writes, and refuses any path that escapes the
  root (realpath + prefix check; `../` returns 404).
- **Not authenticated.** Anything on your wifi that can reach the port can read the tree. That is
  correct for a sample directory and wrong for anything real — the grant story
  (`library.anecdote.channel/GRANTS.md`) is what that needs, and none of it is here.
- **Not the engine.** No citing, no taking, no orders. It reads a directory and shows it.

## What it is showing on purpose

- **Mismatch is the normal case.** The chip strip is every fragment name found anywhere in the
  tree; the ones this dossier lacks are struck through. No two sample dossiers are alike.
- **Noticing, not validating.** `{{…}}` templating in a bespoke file, an empty fragment, a dossier
  with no `NAME` at all — reported beside the thing, never repaired, and the engine holds no
  vocabulary for what it found.
- **The node panel is not a fragment.** Dark, monospaced, visually nothing like paper, because it
  is what the node observed rather than what anyone authored — and it would be empty on a node that
  only keeps notes.
- **`scratch` vs `standalone`** is read from whether the dossier folder is its own git repository,
  which is the lifecycle rule: standalone is the market signal.
