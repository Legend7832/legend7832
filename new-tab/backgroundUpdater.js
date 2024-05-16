import { BackgroundUploader } from './backgroundUploader.js'; // Adjust the file path as needed

class BackgroundUpdater {
    constructor() {
        this.backgroundUploader = new BackgroundUploader();
        chrome.runtime.onInstalled.addListener(() => {
            // Add listener for clicks on the SVG background icon
            chrome.action.onClicked.addListener((tab) => {
                // Delegate background uploading to the backgroundUploader instance
                this.backgroundUploader.openFile(this.updateBackgroundForAllTabs.bind(this));
            });
        });
    }

    updateBackgroundForAllTabs(imageUrl) {
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach((tab) => {
                // Send message to update background with the chosen image URL
                chrome.tabs.sendMessage(tab.id, { action: "update_background", imageUrl: imageUrl });
            });
        });
    }
}

// Export the class for use in other files
export { BackgroundUpdater };
