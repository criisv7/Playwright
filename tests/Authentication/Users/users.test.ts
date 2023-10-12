import * as  data from '../Users/data.json';
import { test, expect} from "@playwright/test";

async function verifyCellValue(page, cellSelector, expectedValue,nthvalue) {

    const cell = page.locator(cellSelector).nth(nthvalue);
    const cellValue = await cell.textContent();
    expect(cellValue).toContain(expectedValue);

}

test('Test Page', async ({ page   }) => {

await page.goto('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
let jsondata = data.default;
const arrayOfArrays = jsondata.map(item => [item]);
for (const data of arrayOfArrays) {
const { name, age, gender } = data[0];
const dataToBeEntered = JSON.stringify(data);
 await page.locator('text=Table Data').click();
 const jsonDataLocator = page.locator('id=jsondata');
 await jsonDataLocator.fill(dataToBeEntered);
 await page.waitForTimeout(2000);
 await page.getByRole('button', { name: 'Refresh table' } ).click();
 await page.waitForTimeout(4000);  
 await page.locator('text=Table Data').click();
const CellName = await verifyCellValue(page, '#dynamictable>tr>td', name, 0);
const CellGender = await verifyCellValue(page, '#dynamictable>tr>td', gender, 2);

}
// if we comment below lines and generate lint report we will get warnings saying test has Test has no assertions, if we uncomment we may see 0 errors
//  const columnName  = page.locator("//th[text()='name']");
//  const columnNameValue  = await columnName.textContent();
//  await expect(columnNameValue).toContain('name');

});
