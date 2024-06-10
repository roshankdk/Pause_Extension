# YouTube Pause on Tab Change Extension

## Description

This browser extension pauses YouTube videos when you switch tabs or minimize the browser window, and resumes playback when you return to the YouTube tab.

## Installation

### For Chrome

1. Download the extension files: `manifest.json`, `background.js`, and `content.js`.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch in the top right corner.
4. Click "Load unpacked" and select the directory containing your extension files.
5. The extension should now be installed and active.

### For Firefox

1. Download the extension files: `manifest.json`, `background.js`, and `content.js`.
2. Open the `manifest.json` file in a text editor.
3. Change `"manifest_version": 3` to `"manifest_version": 2`.
4. Save the `manifest.json` file.
5. Open Firefox and go to `about:debugging`.
6. Click on "This Firefox" in the sidebar.
7. Click the "Load Temporary Add-on..." button and select your `manifest.json` file or the entire extension directory.
8. The extension should now be installed and active.
