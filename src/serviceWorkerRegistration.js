// src/serviceWorkerRegistration.js

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/
  )
);

export function register(config) {
  return new Promise((resolve, reject) => {
    if ('serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        resolve(); // do nothing if origin mismatch
        return;
      }

      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        if (isLocalhost) {
          // Localhost check
          checkValidServiceWorker(swUrl, config)
            .then(resolve)
            .catch(reject);
          navigator.serviceWorker.ready.then(() => {
            console.log('This web app is being served cache-first by a service worker.');
          });
        } else {
          // Register service worker normally
          registerValidSW(swUrl, config)
            .then(resolve)
            .catch(reject);
        }
      });
    } else {
      resolve(); // service workers not supported
    }
  });
}

function registerValidSW(swUrl, config) {
  return navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      console.log('✅ Service Worker registered successfully');
      if (registration.waiting) {
        console.log('⚠️ New content available; please refresh.');
      }
      return registration;
    })
    .catch(error => {
      console.error('❌ Service Worker registration failed:', error);
      throw error;
    });
}

function checkValidServiceWorker(swUrl, config) {
  return fetch(swUrl)
    .then(response => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType && contentType.indexOf('javascript') === -1)
      ) {
        return navigator.serviceWorker.ready
          .then(registration => registration.unregister())
          .then(() => window.location.reload());
      } else {
        return registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App running in offline mode.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => registration.unregister());
  }
}
