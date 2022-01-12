import { CapacitorConfig } from "@capacitor/cli";

// TODO: How to understand if we are in development?

const config: CapacitorConfig = {
  appId: "pwa.update.test",
  appName: "PWA Update Test",
  webDir: "dist",
  // server: {
  //   url: "https://pwa-update-test.surge.sh",
  // },
  bundledWebRuntime: false,
};

export default config;
