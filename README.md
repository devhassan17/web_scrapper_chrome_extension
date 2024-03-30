
# Web Scraping Extension

## Description
This project is a Chrome extension designed to scrape data from web pages based on a specified CSS selector and then post the scraped data to a specified URL. It consists of a Chrome extension frontend, a background script, and a content script.

## Features
- Allows users to input a CSS selector and a POST URL through the extension's UI.
- Scrapes data from the current webpage based on the provided CSS selector.
- Posts the scraped data to the specified URL.
- Provides basic error handling and feedback to the user.

## Installation
To install the extension, follow these steps:
1. Clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned the repository.

## Usage
1. After installation, click on the extension icon in the Chrome toolbar.
2. Enter a CSS selector and a POST URL in the provided input fields.
3. Click the "Scrape & Post" button to scrape data from the current webpage and post it to the specified URL.
4. Check the console and alerts for feedback on the scraping and posting process.

## Debugging
- Use the browser's developer tools to inspect the console for any error messages or debugging output.
- Check the network tab in the developer tools to see if the POST request was successfully sent and received.

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.


---
