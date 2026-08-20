import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('watch');
  await page.getByRole('link', { name: 'watch for girls' }).click();
//  const watchsuggetions= page.locator('ul>li.Swx5kP')
//  const Count=await watchsuggetions.count()
//  console.log("count is:",Count)


});


