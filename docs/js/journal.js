const JOURNAL = {
  async () => {
    const owner = "tiliv", repo = "antibody", path = "{{ page.path }}";
    const r = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?path=${encodeURIComponent(path)}&per_page=1`);
    if (!r.ok) return;
    const [c] = await r.json();
    const when = new Date(c.commit.committer.date).toISOString().slice(0,10);
    document.getElementById("last-updated").textContent = `Last updated: ${when} by ${c.commit.committer.name}`;
  }

};
