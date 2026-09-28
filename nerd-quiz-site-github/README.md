# 🤓 QuizLab — Extremely Normal Quiz Website

A deliberately over-the-top nerdy static website for hosting Quiz Maker embeds.

## GitHub Pages setup

1. Upload this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select your `main` branch and `/ (root)`.
5. Save. GitHub will give you your live URL.

## Adding your Quiz Maker embeds

Open:

- `quizzes/quiz-01.html`
- `quizzes/quiz-02.html`
- `quizzes/quiz-03.html`

Find the comment that says:

`REPLACE THIS DEMO BOX WITH YOUR QUIZ MAKER EMBED CODE.`

Delete the demo `<div class="embed-placeholder">...</div>` and paste your Quiz Maker iframe/embed code in its place.

### Adding more quizzes

Duplicate a quiz HTML file, rename it, update the title/module number, then add its link to `menu.html` and the side menu on each page.

## Design

- CRT/terminal aesthetic
- Extremely unnecessary nerd energy
- Responsive
- Persistent hamburger menu on every page
- No build tools or frameworks required
- Works as a plain GitHub Pages site

## Customization

Most visual settings are at the top of `css/style.css` under `:root`.
