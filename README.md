#  Word Count

A clean, lightweight text tool built with vanilla JS. Type or paste text and get an instant character count. Comes with a **dark/light mode toggle** that remembers your choice, and **auto-saves your text to `localStorage`** so it's still there when you refresh.

🔗 **Live:** https://nb-word-count.vercel.app/
📦 **Repo:** https://github.com/nhlamulobaloyi006/nb-word-count.git

## ✨ Features

- 🔤 **Live character count** — updates as you type
- 🌗 **Dark / Light mode toggle** — remembers your preference across sessions
- 💾 **Auto-save to `localStorage`** — your text survives a refresh
- 🧹 **Ctrl to clear** — hold Ctrl to wipe the textarea instantly
- 🎨 **Custom SVG icons** — separate sun/moon icons for each theme
- 📱 **Responsive layout**

## 🧠 How It Works

1. Type or paste text into the textarea
2. Character count updates live on every keystroke
3. Text is saved to `localStorage` under the key `value` on every input
4. Toggle the theme button → swaps between light and dark, saves to `localStorage` under `userPreference`
5. On page load, both the text and theme are restored from `localStorage`

## 📁 Project Structure

```
nb-word-count/
├── index.html
├── styles.css
├── script.js
├── icons/
│   ├── light_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg
│   └── dark_mode_24dp_0000000_FILL0_wght400_GRAD0_opsz24.svg
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/nhlamulobaloyi006/nb-word-count.git
cd nb-word-count
```

### 2. Open it

Double-click `index.html`, or use a live server:

```bash
npx serve .
```

No installs, no build step — pure static site.

## 🛠️ Built With

- **HTML5** — semantic markup
- **CSS3** — theme classes, transitions
- **Vanilla JavaScript** — localStorage, DOM manipulation, event listeners
- **SVG icons** — custom light/dark mode icons

## 💾 LocalStorage Keys

| Key | Holds |
|-----|-------|
| `value` | Array containing `{ char: "your text" }` |
| `userPreference` | Array containing `{ theme, styles, icon }` |

To reset the app: DevTools → Application → Local Storage → clear both keys.

## 🎨 Customization

### Change the dark mode background

In `script.js`, tweak the `styles` value inside `darkTheme()`:

```js
styles: "#343541" // change to whatever hex color you want
```

### Change the light mode background

Same spot, in the `!isDark` block:

```js
styles: "#ffffff"
```

### Change the clear shortcut

Right now it's **Ctrl**. To use a different key, edit the `keydown` listener:

```js
if (e.key === "Escape") { /* clear */ }
```

## 🗺️ Possible Improvements

- [ ] Word count (not just characters)
- [ ] Sentence and paragraph count
- [ ] Reading time estimate
- [ ] Copy-to-clipboard button
- [ ] Download text as `.txt`
- [ ] Character limit with warning
- [ ] Better keyboard shortcut (Ctrl alone is risky — it fires on copy/paste too)

## 📜 License

MIT — do whatever you want with it.

---

**Made with ⌨️ and vanilla JS by Nhlamulo Baloyi**
