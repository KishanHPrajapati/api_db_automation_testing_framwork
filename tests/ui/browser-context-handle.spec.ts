import { expect , test, chromium } from "@playwright/test";

// test("Handle new page", async({ context })=> {
//     const page = await context.newPage();
//     await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/");
//     await page.locator("//a[@id='gobasicajax']").click();
//     const pagePromis = context.waitForEvent("page");
// })


// const browser = await chromium.launch({headless: false});
// const browserContext = await browser.newContext();

// const pages = browserContext.newPages();

// for (let page of pages) {
//    const page1 = page.includes("/dashboard")
//    const page2 = page.includes("/leads")
//    if (page.title() === page1) {
//      page.locator("#save-button").click();
//      page.close()
//   } else if (page.title() === page2) {
//      page.locator("#new-lead").click();
//      page.close();
//   }
// }