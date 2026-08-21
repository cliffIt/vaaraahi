# Deploying Vaaraahi to Render

The site is plain HTML/CSS/JS — no build step, no dependencies. Render serves the files as-is.

## What you need before starting
- A **GitHub account** (free) — Render deploys from a Git repo; it can't take a zip upload.
- A **Render account** (free) — sign up with the same GitHub account to save a step.
- Access to **DNS for vaaraahikitchen.com** (wherever you bought the domain).

---

## Step 1 — Put the site in your GitHub repo

Your repo: **https://github.com/cliffIt/vaaraahi**

Use **`vaaraahi-repo-contents.zip`** for this — it's zipped so that `index.html` sits at the
top level. (The other zip, `vaaraahi-website.zip`, wraps everything in a `vaaraahi/` folder,
which would nest the site one level too deep and Render would serve a blank page.)

**Browser method — no command line:**
1. Unzip `vaaraahi-repo-contents.zip`.
2. Open https://github.com/cliffIt/vaaraahi → **Add file** → **Upload files**
   (on a brand-new empty repo, the link reads *"uploading an existing file"*).
3. Select all 18 items from the unzipped folder — `index.html`, `menu.html`, `about.html`,
   `catering.html`, `contact.html`, `render.yaml`, `README.md`, `DEPLOY.md`, `SHOT-LIST.md`,
   `.gitignore`, and the `assets`, `css`, `js` folders — and drag them into the browser.
4. Commit message: `Vaaraahi website` → **Commit changes**.

✅ Check: the repo file list should show `index.html` directly, **not** a single `vaaraahi` folder.
If you see the folder, open it, delete it, and re-upload the contents.

**Command line instead:**
```bash
cd path/to/unzipped-folder      # the one containing index.html
git init
git add .
git commit -m "Vaaraahi website"
git branch -M main
git remote add origin https://github.com/cliffIt/vaaraahi.git
git push -u origin main
```
GitHub will ask for a Personal Access Token as the password
(github.com → Settings → Developer settings → Personal access tokens).

## Step 2 — Create the static site on Render
1. Render Dashboard → **New +** → **Static Site**.
2. Connect GitHub, authorize Render, pick the `vaaraahi` repo.
3. Fill in:
   - **Name:** `vaaraahi` (this becomes `vaaraahi.onrender.com`)
   - **Branch:** `main`
   - **Root Directory:** *leave blank*
   - **Build Command:** *leave blank* — there's nothing to build
   - **Publish Directory:** `.` (a single dot — the repo root)
4. **Create Static Site.** It goes live in under a minute at `vaaraahi.onrender.com`.

`render.yaml` in the repo already sets caching, security headers, and pretty URLs (`/menu` works as well as `/menu.html`). Render picks it up automatically.

## Step 3 — Point vaaraahikitchen.com at it
1. In Render: your site → **Settings** → **Custom Domains** → **+ Add Custom Domain**.
2. Add **both** `vaaraahikitchen.com` and `www.vaaraahikitchen.com`.
3. Render shows the exact DNS values. At your domain registrar, create:
   - **A record** — host `@`, value = the IP Render displays.
   - **CNAME record** — host `www`, value = `vaaraahi.onrender.com`.
4. **Delete any AAAA (IPv6) records** for the domain. Render is IPv4-only and an AAAA record will break both routing and the certificate.
5. Back in Render, click **Verify**. HTTPS is issued automatically by Let's Encrypt, usually within minutes, and renews itself forever.

DNS usually propagates in 10–30 minutes, occasionally up to 48 hours. If you use Cloudflare, leave the proxy **off** (grey cloud) until Render confirms the certificate, then turn it on if you want.

## Updating the site later
Every push to `main` redeploys automatically. To change a price, edit `js/data.js` on GitHub (pencil icon), commit, and it's live in about a minute. Or send me the change and I'll hand back updated files.

## Before you point the domain — finish these
Search the project for **"coming soon"** and **"to be added"**:
- Real address, phone number (also in the `tel:` links), and opening hours — `contact.html` and every page footer.
- **Order Online** button — currently `href="#"` on every page.
- Google Maps embed on `contact.html`.
- Dish photos — see `README.md` and `SHOT-LIST.md`.
