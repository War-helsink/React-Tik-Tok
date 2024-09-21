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
