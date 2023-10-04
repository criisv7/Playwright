import * as  data from '../Users/data.json';
import { test, expect} from "@playwright/test";
test('Test Page', async ({ page   }) => {

await page.goto('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
const dataToBeEntered = JSON.stringify(data.default);
 await page.locator('text=Table Data').click();
 const jsonDataLocator = page.locator('id=jsondata');
 await jsonDataLocator.fill(dataToBeEntered);
 await page.waitForTimeout(2000);
 await page.getByRole('button', { name: 'Refresh table' } ).click();
 await page.waitForTimeout(2000);  

// if we comment below lines and generate lint report we will get warnings saying test has Test has no assertions, if we uncomment we may see 0 errors
//  const columnName  = page.locator("//th[text()='name']");
//  const columnNameValue  = await columnName.textContent();
// await expect(columnNameValue).toContain('name');

});
