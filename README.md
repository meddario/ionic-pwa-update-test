# Ionic PWA Update Test

Try to update a Ionic native app using a PWA with service worker.

## Project creation

```sh
npx @ionic/cli start "PWA Update Test" blank --type=vue --package-id=pwa.update.test --project-id=pwa-update-test

npx @ionic/cli cap add android # Add mobile support

npx @vue/cli add pwa@next # Add PWA support, see https://ionicframework.com/docs/vue/pwa
```

**Important:** Add vue.config.js for Service Worker workbox options:

```js
module.exports = {
  pwa: {
    // ... rest of the options ...

    workboxOptions: {
      // https://stackoverflow.com/a/54377386
      // If omitted, needs to be manually done (otherwise there will be an infinite refresh loop)
      skipWaiting: true,
      // To act as a fallback for the client-side URLs. See https://stackoverflow.com/a/59389816.
      navigateFallback: "index.html",
    },
  },
};
```

## Updating mobile app after changing the plugins

```sh
npx @ionic/cli cap sync
```

## Usage

The idea is to build the mobile app once and then publish the PWA and have it to reload inside the app.

To do this:

- Change something in the app, for example the counter in `src/views/HomePage.vue`.
- Republish the PWA using `./publish-pwa.sh` (which will publish the PWA to <https://pwa-update-test.surge.sh>, which represents our URL containing the `dist` output of `npm run build`).
