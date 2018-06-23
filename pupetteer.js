const puppeteer = require('puppeteer');
const cheerio = require("cheerio");
const JSON = require("json");
 

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto('https://www.nationalgeographic.com/latest-stories/?source=sitenavstories');
    await page.waitFor(1000)
  } catch(err) {console.log(err)}
  //await page.screenshot({path: 'boyhowdy7.png'});
  let content = await page.content();
  var $ = cheerio.load(content);

  $('a').each(function(i, element){
  var a = $(this).prev();
  var rank = a.parent().parent().text();
  console.log("rank", rank);
  var url = a.attr('href');
  console.log("url", url);

  })
})()
