import { Page } from 'playwright';

export async function createWallet(page: Page) {
    await page.keyboard.press("Control+T");
    await page.goto('chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html#/create-wallet');
    await page.locator('div').filter({ hasText: /^Secret Recovery Phrase or Private Key$/ }).first().click();
    // Scroll the dialog to the bottom.

    await page.locator('.term-of-use-dialog__body').first().click();
    await page.keyboard.press('Control+End');


    
    await page.getByRole('button', { name: 'I agree, please continue' }).click();
    await page.getByPlaceholder('Enter password', { exact: true }).click();
    await page.getByPlaceholder('Enter password', { exact: true }).fill('westeros');
    await page.getByPlaceholder('Enter password again').click();
    await page.getByPlaceholder('Enter password again').fill('westeros');
    await page.getByRole('button', { name: 'Continue' }).click();

    await page.locator("#backup-passphrase").click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('div').filter({ hasText: /^123456789101112131415161718192021222324$/ }).locator('path').nth(4).click();
    await page.getByRole('button', { name: 'Copy' }).click();
    await page.getByText('I saved my Secret Recovery Phrase').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
}

export async function importWallet(page: Page) {

}