import {test} from "@playwright/test"
import fs from "fs"
import {parse} from "csv-parse/sync"


const csvDataArray = parse(fs.readFileSync("testdata/TestData.csv"), {
    columns:true,
    skip_empty_lines:true,
    // delimiter:";"
})

test('Print csv/excel data', async () => {
    await console.log(csvDataArray);
})

csvDataArray.forEach((csvData:any) => {
    test(`Get Data from Csv file ${csvData.Id}`, async ({page}) => {
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.locator("input#firstName").fill(csvData.FirstName);
        await page.locator("input#lastName").fill(csvData.LastName);
    })
})

