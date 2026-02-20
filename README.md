# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Calculator

    A minimal React + TypeScript application bootstrapped with Vite. This repository contains a small calculator UI and the standard developer tooling to build, lint, and deploy the app.

    Key technologies
    - **React** (v19)
    - **TypeScript**
    - **Vite** (dev server + build)

    Prerequisites
    - Node.js 18 or newer
    - npm (or yarn/pnpm)

    Quick start

    Install dependencies:

    ```bash
    npm install
    ```

    Run the development server (with HMR):

    ```bash
    npm run dev
    ```

    Build for production

    ```bash
    npm run build
    ```

    Preview the production build locally:

    ```bash
    npm run preview
    ```

    Linting

    Run ESLint over the project:

    ```bash
    npm run lint
    ```

    What the scripts do (see [package.json](package.json))
    - `dev`: start Vite dev server
    - `build`: run TypeScript build (`tsc -b`) then `vite build`
    - `preview`: serve the production build locally
    - `lint`: run ESLint
    - `predeploy` / `deploy`: build and publish the `dist` folder to GitHub Pages (uses `gh-pages`)

    Deploy to GitHub Pages

    This project includes `gh-pages` as a dev dependency and two scripts in [package.json](package.json): `predeploy` and `deploy`. `predeploy` runs the build and `deploy` publishes the `dist` folder.

    Basic steps to publish:

    1. Create a GitHub repository and add it as the `origin` remote.
    2. (Optional) Add a `homepage` field to `package.json` with the Pages URL, for example:

    ```json
    "homepage": "https://<your-username>.github.io/<your-repo>/"
    ```

    3. Commit and push your code to the default branch (for example `main`).
    4. Run the deploy script:

    ```bash
    npm run deploy
    ```

    The `gh-pages` package will create (or update) the `gh-pages` branch and push the contents of `dist` there. GitHub Pages will serve the files from that branch.

    Troubleshooting
    - If `npm run deploy` fails, ensure you have a valid `origin` remote and push permissions.
    - If your site returns 404 after deploy, double-check the `homepage` value and repository name.

    Further customization
    - ESLint and TypeScript configs are in the repo; update `tsconfig.*.json` or `eslint.config.js` to enable stricter rules or type-aware linting.

    If you want, I can also add a short `DEPLOY.md` with step-by-step screenshots or set up a GitHub Action to publish on every push to `main`.
