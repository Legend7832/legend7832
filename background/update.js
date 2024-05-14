import { BackgroundUpdater } from "./backgroundUpdater.js"; // Adjust the import statement

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "changeBackground") {
    let updater = new BackgroundUpdater();
    updater.uploadBackground();
  }
});
