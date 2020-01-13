const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto('https://google.com');
    await page.evaluate(() => {
        document.querySelector('input[title="ค้นหา"]').value = "facebook";
        document.querySelector('input[name="btnK"]').click();
    });
    await page.waitForSelector('a[href="https://th-th.facebook.com/"]');
    await page.evaluate(()=>{
        document.querySelector('a[href="https://th-th.facebook.com/"]').click();
    });
    await page.waitForSelector('input[type="email"]');
    await page.screenshot({path: 'OBaVg52wtTZ.png'});

    const dimensions = await page.evaluate(() => {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          deviceScaleFactor: window.devicePixelRatio
        };
      });
    
      console.log('Dimensions:', dimensions);

    await browser.close();
  })();