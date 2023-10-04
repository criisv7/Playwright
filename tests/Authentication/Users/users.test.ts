import * as  data from '../Users/data.json';
import { test} from "@playwright/test";
test('Test Page', async ({ page   }) => {

await page.goto('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
let dataToBeEntered = JSON.stringify(data.default);
 await page.locator('text=Table Data').click();
 const jsonDataLocator = page.locator('id=jsondata');
 await jsonDataLocator.fill(dataToBeEntered);
 await page.waitForTimeout(2000);
 await page.getByRole('button', { name: 'Refresh table' } ).click();
 await page.waitForTimeout(2000);  
});
