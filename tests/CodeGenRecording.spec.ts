import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ultimateqa.com/filling-out-forms/');
  await page.locator('#et_pb_contact_name_0').click();
  await page.locator('#et_pb_contact_name_0').fill('Name');
  await page.locator('#et_pb_contact_message_0').click();
  await page.locator('#et_pb_contact_message_0').fill('This is a demo');
  await page.getByText('Name Message Submit').click();
  await page.locator('#et_pb_contact_form_0').getByRole('button', { name: 'Submit 9' }).click();
  await page.locator('#et_pb_contact_name_1').fill('nothing');
  await page.locator('#et_pb_contact_message_1').fill('this is a demo');
  await page.locator('input[name="et_pb_contact_captcha_1"]').click();
  await page.locator('input[name="et_pb_contact_captcha_1"]').fill('22');
  await page.getByRole('button', { name: 'Submit 9' }).click();
  await page.locator('#et_pb_contact_form_1').getByText('Thanks for contacting us').click();
  await page.locator('#et_pb_contact_form_0').getByText('Thanks for contacting us').click();
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   