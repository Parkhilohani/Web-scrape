# Web-scrape
using web scrabe for fetching API

Book Scraper
A simple web scraping project that extracts book data from Books to Scrape using Puppeteer. The scraped data includes title, price, stock status, rating, and link, which is saved in a JSON file and displayed on a styled web page.

Features:-
1.Scrapes book data using Puppeteer
2.Stores data in books.json
3.Displays books in a user-friendly HTML page
4.Includes images and "More Info" links
5.Basic styling with CSS

Tech Stack
1.Node.js
2.Puppeteer
3.HTML, CSS, JavaScript
4.Express.js for serving data

How It Works
1.The script launches a headless browser and navigates to the target website.
2.It collects book details by querying the page’s HTML elements.
3.Extracted data is stored in a file named books.json.
4.The frontend fetches this JSON data and dynamically displays it on the page.
5.A styled interface presents each book with title, price, stock status, rating, image, and link.

How to Use
1.Run the scraper to generate books.json
2.Use a local server to serve the frontend
3.Open the site in your browser to view the book list

![Web scraping _ book list - Google Chrome 5_24_2025 5_03_09 PM](https://github.com/user-attachments/assets/f9d6bf7f-a577-4a1c-a162-f99e8deac597)

