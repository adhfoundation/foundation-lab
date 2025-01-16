import { test, expect } from '@playwright/test';

test('check Afya homepage title', async ({ page }) => {
  await page.goto('https://afya.com.br');
  const title = await page.title();
  await page.waitForTimeout(5000);
  expect(title).toBe('Afya | Home');

  const menuAfya = page.locator('xpath=//div[@class="text-menu" and text()="Afya"]');
  await menuAfya.waitFor();
  await menuAfya.click();

  const menuQuemSomos = page.locator('xpath=//div[@class="text-size-regular" and text()="Quem somos"]');
  await menuQuemSomos.waitFor();
  await menuQuemSomos.click();

  const titleCondigoCOnduta = page.locator('h2.uui-heading-medium-5:text("Código de Conduta Afya")');
  await titleCondigoCOnduta.waitFor();
  await titleCondigoCOnduta.scrollIntoViewIfNeeded();

  await page.waitForTimeout(5000);

});