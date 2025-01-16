import { test, expect } from '@playwright/test';

test('check Afya homepage title', async ({ page }) => {
  await page.goto('https://afya.com.br');
  const title = await page.title();
  await page.waitForTimeout(2000);
  //expect(title).toBe('Afya | Home');

  const menuAfya = page.locator('xpath=//div[@class="text-menu" and text()="Afya"]');
  await menuAfya.waitFor();
  await menuAfya.click();

  const menuQuemSomos = page.locator('xpath=//div[@class="text-size-regular" and text()="Quem somos"]');
  await menuQuemSomos.waitFor();
  await menuQuemSomos.click();

  const titleCodigoConduta = page.locator('h2.uui-heading-medium-5:text("Código de Conduta Afya")');
  await titleCodigoConduta.waitFor();
  const textoTitulo = await titleCodigoConduta.textContent();
  expect(textoTitulo?.trim()).toBe('Código de Conduta Afya');

  await page.waitForTimeout(3000);

});