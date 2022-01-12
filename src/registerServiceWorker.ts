/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "PWA SW: App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("PWA SW: Service worker has been registered.");
    },
    cached() {
      console.log("PWA SW: Content has been cached for offline use.");
    },
    updatefound() {
      console.log("PWA SW: New content is downloading.");
    },
    updated() {
      console.log("PWA SW: New content is available; please refresh.");

      if (window.confirm("Update available, reload now?")) {
        window.location.reload();
      }
    },
    offline() {
      console.log(
        "PWA SW: No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
