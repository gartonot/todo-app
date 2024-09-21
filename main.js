import App from './scripts/App.js';

(async () => {
  const appHtml = document.getElementById('app');

  appHtml.append(await App());
})();
