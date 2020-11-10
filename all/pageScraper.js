const fs = require('fs');


const scraperObject = {
    url: 'https://imgur.com/a/iYy9q',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url);
 // Wait for the required DOM to be rendered
 await page.waitForSelector('.Gallery-ContentWrapper');
 // Get the link to all the required books



    let btn = await page.$$eval('.Gallery-ContentWrapper', links => {
     links = links.map(el => el.querySelector('div > button').click())
     return links;
 });

 let urls = await page.$$eval('.Gallery-Content--mediaContainer', links => {
    links = links.map(el => el.querySelector('div > img').src)
    return links;
});



fs.writeFile("./public/data.json", JSON.stringify(urls), 'utf8', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The data has been scraped and saved successfully! View it at './data.json'");
});
 console.log(urls);

    }
}

module.exports = {scraperObject};