module.exports = {
  pwa: {
    themeColor: "#3880ff",
    msTileColor: "#3880ff",
    name: "PWA Update Test",
    workboxOptions: {
      // https://stackoverflow.com/a/54377386
      // If omitted, needs to be manually done (otherwise there will be an infinite refresh loop)
      skipWaiting: true,
      // To act as a fallback for the client-side URLs. See https://stackoverflow.com/a/59389816.
      navigateFallback: "index.html",
    },
  },
};
