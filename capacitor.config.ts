import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "pwa.update.test",
  appName: "PWA Update Test",
  webDir: "dist",
  // TODO: How to understand if we are in development in order to conditionally change
  //  the server url only for production? `process.env.BASE_URL` doesn't seem to work...
  server: {
    url: "https://pwa-update-test.surge.sh",
  },
  bundledWebRuntime: false,
};

export default config;
