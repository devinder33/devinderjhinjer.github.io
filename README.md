# Devinder Singh Jhinjer — Portfolio

A fast, responsive, single-page portfolio for a Senior Native Android Developer. The site uses only semantic HTML, CSS, and a small amount of vanilla JavaScript, so it can be hosted directly on GitHub Pages.

## Run locally

No build step is required. Either open `index.html` directly or start a small local server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add real contact links

Open `js/main.js` and fill in the values in `profileLinks`. Use a full URL for LinkedIn, GitHub, and Upwork. The email may be entered as either an address or a `mailto:` URL.

For the résumé, place the PDF in `resume/` and use a relative path such as:

```js
resume: "resume/Devinder-Singh-Jhinjer-Resume.pdf"
```

Links with empty values remain visible as disabled placeholders; they never lead to fake or broken profiles.

## Replace project images

Placeholder artwork lives in `assets/images/projects/`. Replace each SVG with a real app screenshot, or change its `<img src>` in `index.html`. Keep descriptive `alt` text and use optimized WebP or AVIF files where possible.

## Replace the profile portrait

Replace `assets/images/profile/devinder-profile-placeholder.svg` with a professional portrait, or update the portrait `<img src>` in `index.html`. A 4:5 JPG or WebP works best. The layout uses `object-fit: cover`, so the image keeps its proportions without distortion. Update the image alt text from “portrait placeholder” to “Devinder Singh Jhinjer” when the real photograph is added.

## Add employment history

The Experience section currently uses only verified high-level information. An HTML comment above the experience entry in `index.html` lists the information needed for each role: company, title, dates, location, responsibilities or achievements, and technologies.

## Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the site (usually `main`) and the `/ (root)` folder.
5. Save. GitHub will provide the public URL after publishing.

All paths are relative, so the site works both at a root domain and in a GitHub Pages repository subdirectory.

## Structure

```text
.
├── index.html
├── css/styles.css
├── js/main.js
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── profile/
│       └── projects/
└── resume/
```
