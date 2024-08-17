# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## Ready-made version on hosting

URL
- [site](https://tik-tok-e25a6.web.app/)

## Running the Project

To get started with the project, follow these steps:

- Install Dependencies:

```js
  npm install
```


Configure Environment Variables:
- Create a .env file in the root directory with the following content:
- Register on the [site](https://rapidapi.com/hub) and get rapidapi_key and rapidapi_host
- After that, you need to find the required API and enable it, for this you need to search the web for "tiktok video no watermark"
- After connecting the API, you can get rapidapi_key and rapidapi_host on the API page
- VITE_RAPIDAPI_KEY=rapidapi_key
- VITE_RAPIDAPI_HOST=rapidapi_host
- VITE_REGION=UA — the region from which videos will be downloaded, you can see in the documentation [site](https://rapidapi.com/hub)
- VITE_DEFAULT_LNG=uk this is a default language, the application has only three translations en, ru, uk.
- Register on the [site](https://rapidapi.com/hub) and get your_api_key_here


Run the Project:
- You can start the development server using one of the following commands:

```js
./bin/run.sh

  or

npm run dev
```
Don't forget to replace rapidapi_key and rapidapi_host with your actual API key. If you need any further assistance, feel free to ask!
