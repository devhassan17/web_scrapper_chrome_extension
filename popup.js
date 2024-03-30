document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ["content.js"]
        });
    });

    document.getElementById('scrapeButton').addEventListener('click', function () {
        scrapeAndPost();
    });

    // Retrieve page data from localStorage if needed
    // const pageData = localStorage.getItem('pageData');
    // console.log('Page data:', pageData);
    // You can uncomment the above lines if you want to retrieve page data from localStorage
});

// Content script to perform scraping and post data
function scrapeAndPost() {
    const cssSelector = document.getElementById('cssSelector').value;
    const postURL = document.getElementById('postURL').value;

    if (cssSelector && postURL) {
        const scrapedData = getScrapedData(cssSelector);
        postScrapedData(postURL, scrapedData);
    } else {
        alert('Please provide CSS Selector and POST URL');
    }
}

function getScrapedData(cssSelector) {
    const data = document.querySelector(cssSelector);
    return data ? data.innerText : 'No data found';
}

function postScrapedData(url, data) {
    console.log(data)
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data posted successfully:', data);
            alert('Data posted successfully');
        })
        .catch(error => {
            console.error('Error posting data:', error);
            alert('Error posting data');
        });

    // Save data to localStorage if needed
    // localStorage.setItem('scrapedData', JSON.stringify(data));
}

// Perform scraping when the button is clicked
document.getElementById('scrapeButton').addEventListener('click', function () {
    scrapeAndPost();
});
