# OctoFit Tracker frontend

The Vite development server runs on port `5173` and calls the backend on port
`8000`. In Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` (copy
`.env.example` and replace the placeholder):

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

Use the value of the `CODESPACE_NAME` environment variable for the current
Codespace. Do not commit `.env.local`; it is ignored by Git.

When `VITE_CODESPACE_NAME` is unset, the app safely falls back to
`http://localhost:8000`.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
