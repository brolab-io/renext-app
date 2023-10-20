import { test, expect  } from '../fixtures';
import { createWallet } from '../e2e-renec'; 
import * as dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();


test('Claim token whitelist', async ({ page }) => {
  test.setTimeout(10000000);
  
  // Import Wallet
  await createWallet(page);
  await page.goto('chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html#');
  await page.getByText('Account 1').click();
  await page.getByRole('button', { name: 'Add/Connect Account' }).click();
  await page.getByText('Import a private key').click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('acc 2');
  await page.getByPlaceholder('Private key').click();
  await page.getByPlaceholder('Private key').fill(process.env.WALLET_BUY_PRIVATE);
  await page.getByRole('button', { name: 'Import' }).click();

  // Connect Wallet
  await page.goto('https://renext.xyz/');
  await page.getByRole('button', { name: 'Connect wallet' }).click();
  await page.getByRole('button', { name: 'Demon icon Demon Detected' }).click();
  const newPage = await page.context().newPage();
  await newPage.goto('chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html#/connect-app?title=Home%20|%20ReNext%20-%20Web3%20IGO/IDO%20Token%20Launchpad&url=https://renext.xyz&logo=https://renext.xyz/favicon-32x32.png&requestId=1&fromWindowId=127755064');
  await newPage.getByRole('button', { name: 'Connect' }).click();
  await newPage.close();
  await page.goto('https://renext.xyz/');
  const wallet_address = await page.locator('.wallet-adapter-button-content').first().innerText();
  expect(wallet_address).toContain("...");
  
  fs.readFile('data.txt', 'utf8', (err, data) => {
    const link = data.trim(); // Trim to remove any leading/trailing whitespace
    console.log('Retrieved link:', link);
    page.goto(link);
  });
  await page.waitForTimeout(5000);

  await page.getByRole('button', { name: 'Claim Token' }).click();
  const page2 = await page.context().waitForEvent('page');
  await page2.getByRole('button', { name: 'Approve' }).click();
  await page2.close();

  await page.waitForTimeout(5000);
});