[README-REPUBLISH.md](https://github.com/user-attachments/files/26224010/README-REPUBLISH.md)
Updated files in this package

1. index.html
   - Fixes pipeline dark mode styling on the new cards and top sections
   - Adds a small X remove control on each pipeline card
   - Adds a confirmation prompt before removing a plan from the pipeline
   - Moves the DOL filing link in the detail panel to the top, under the basic plan info
   - Removes the old DOL filing button from the quick-action row

What to replace in your GitHub repo

Replace only:
- index.html

Do not replace:
- data/
- functions/
- scripts/
- tools/

Why only index.html
Your currently live repo is still running the app from the large inline script inside index.html. The modular scripts folder is present in the repo, but this live build is not using those files for the pipeline behavior you asked to refine. So the correct surgical update is just the HTML file.

How to republish to GitHub

Option A: GitHub web UI
1. Open your repo on GitHub
2. Open index.html
3. Click the pencil/edit icon or choose Add file -> Upload files
4. Replace the existing index.html with the one from this package
5. Commit directly to your main branch
6. Cloudflare Pages will auto-deploy

Option B: local Git
1. Unzip this package
2. Copy index.html into your repo folder, replacing the current one
3. In a terminal, run:

   git add index.html
   git commit -m "Refine pipeline dark mode, remove action, and DOL link placement"
   git push

4. Wait for Cloudflare Pages to auto-deploy

What to test after deploy

1. Turn on dark mode and open the Pipeline tab
   - hero card, summary card, toolbar, columns, and cards should all look correct

2. Click the small X on a pipeline card
   - you should get a confirmation prompt
   - if confirmed, the plan should be removed

3. Open a plan in the detail panel
   - the DOL filing link should appear near the top, under the basic plan info
   - the old DOL filing button should no longer be in the quick-action row

4. Remove a plan from the detail panel
   - you should also get the same confirmation prompt

If something looks off after deploy, compare only the live index.html first. The rest of the repo can stay exactly as it is.
