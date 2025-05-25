import puppeteer from  'puppeteer';
import fs from 'fs';

const scrape = async () => {
    try{    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = 'https://books.toscrape.com';

    await page.goto(url);

    const title = await page.title();
    console.log(`Page title: ${title}`) 
    
  
    const books = await page.evaluate( () => {
        const bookElements = document.querySelectorAll('.product_pod');
        return Array.from(bookElements).map((book) => {
            const relativeimage = book.querySelector('img').getAttribute('src');
            const image = new URL(relativeimage, 'https://books.toscrape.com/').href;
            const title = book.querySelector('h3 a').getAttribute('title');
            const price = book.querySelector('.price_color').textContent;
            const stock = book.querySelector('.instock.availability')?'In Stock':'Out ofStock';
            const rating = book.querySelector('.star-rating').className.split(' ')[1];       
            const relativeLink = book.querySelector('h3 a').getAttribute('href');
            const link = new URL(relativeLink, 'https://books.toscrape.com/').href;

            return{
                image,
                title,
                price,
                stock,
                rating,
                link
            };
        });
            
          
    });

    fs.writeFileSync('books.json',JSON.stringify(books,null,2));

    console.log(books);
    
    await browser.close();
} catch (error) {
    console.error('Error during scraping:', error);
}
};

scrape();