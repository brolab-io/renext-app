import { test, expect  } from '../fixtures';
import { createWallet } from '../e2e-renec'; 
import * as dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();




test('Create Project Fair Launch', async ({ page }) => {
  test.setTimeout(10000000);
  
  // Import Wallet
  await createWallet(page);
  await page.goto('chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html#');
  await page.getByText('Account 1').click();
  await page.getByRole('button', { name: 'Add/Connect Account' }).click();
  await page.getByText('Import a private key').click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('acc 1');
  await page.getByPlaceholder('Private key').click();
  await page.getByPlaceholder('Private key').fill(process.env.WALLET_SELL_PRIVATE);
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

  
  // Create Token 
  await page.goto("https://renext.xyz/utils");
  await page.getByRole('button', { name: 'Create Token' }).click();;
  const newPage2 = await page.context().waitForEvent('page');
  await newPage2.waitForTimeout(10000);
  await newPage2.getByRole('button', { name: 'Approve' }).click();
  await newPage2.close();
  await page.waitForTimeout(5000);
  const newToken = await page.locator('.text-white').first().innerText();
  console.log(newToken);
  expect(newToken).toBeTruthy;
  await page.locator('div').filter({ hasText: /^Token mint$/ }).getByRole('textbox').click();
  

  // Create Project step 1
  await page.goto("https://renext.xyz/apply");
  await page.getByPlaceholder('e.g.  The New Renext Project').click();
  await page.getByPlaceholder('e.g.  The New Renext Project').fill('Test project');
  await page.getByPlaceholder('e.g.  https://renext.xyz/logo.png').click();
  await page.getByPlaceholder('e.g.  https://renext.xyz/logo.png').fill('https://s3.coinmarketcap.com/static-gravity/image/6d4bd8e303464b74a329d094ce8644ee.jpg');
  await page.getByPlaceholder('e.g.  https://renext.xyz/banner.png').click();
  await page.getByPlaceholder('e.g.  https://renext.xyz/banner.png').fill('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyXRgphHlD0GTw49ZB08TpBCF4n1r__bCJZXf8qbxLLFO1D0sJyN4lKUdMEmu1UGmay4&usqp=CAU');
  await page.getByPlaceholder('e.g.  https://renext.xyz/banner.png').press('Control+a');
  await page.getByPlaceholder('e.g.  https://renext.xyz/banner.png').fill('');
  await page.getByPlaceholder('e.g.  https://renext.xyz/banner.png').click();
  await page.getByPlaceholder('e.g.  https://renext.xyz/banner.png').fill('https://miro.medium.com/v2/resize:fit:1400/1*XiEM8ifQNkXFr46crXLyzA.png');
  await page.getByPlaceholder('e.g.  contact@renext.xyz').click();
  await page.getByPlaceholder('e.g.  contact@renext.xyz').fill('contact@renext.xyz');
  await page.getByPlaceholder('e.g.  https://renext.xyz', { exact: true }).click();
  await page.getByPlaceholder('e.g.  https://renext.xyz', { exact: true }).fill('renext.xyz');
  await page.locator('#NFT').click();
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  
  // Create Project step 2
  await page.getByPlaceholder('e.g.  GFxaSoaQsrY35DCePxAVFpgeaEeucPGH6rt9j67LtzoS').click();
  await page.getByPlaceholder('e.g.  GFxaSoaQsrY35DCePxAVFpgeaEeucPGH6rt9j67LtzoS').fill(newToken);
  await page.getByPlaceholder('e.g.  REX').click();
  await page.getByPlaceholder('e.g.  REX').fill('AAA');
  await page.getByPlaceholder('e.g.  1000000').click();
  await page.getByPlaceholder('e.g.  1000000').fill('100000');
  await page.getByPlaceholder('e.g.  100 (1 RENEC = 100 aaa)').click();
  await page.getByPlaceholder('e.g.  100 (1 RENEC = 100 aaa)').fill('100');
  await page.getByPlaceholder('e.g.  1', { exact: true }).click();
  await page.getByPlaceholder('e.g.  1', { exact: true }).fill('1');
  await page.getByPlaceholder('e.g.  1000', { exact: true }).click();
  await page.getByPlaceholder('e.g.  1000', { exact: true }).fill('1000');
  await page.getByText('FAIR LAUNCH').click();
  await page.getByLabel('Unlocked Date *').click();
  await page.getByLabel('Unlocked Date *').press('Tab');
  const currentDate = new Date();
  currentDate.setSeconds(currentDate.getSeconds() + 60); // Add 60 seconds to the current date and time (1 minute).
  const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}T${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
  await page.getByLabel('Unlocked Date *').fill(formattedDate);
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  // Create Project step 3
  await page.waitForTimeout(5000);
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('# PROJECT DESCRIPTION\nBitTorrent-New is a decentralized ecosystem based on and built from the BitTorrent online file sharing platform, which originated in the 2000s. In 2019, the Tron network purchased the struggling platform and attached a decentralized aspect to it in order to revitalize and upgrade the outdated technology in the classic online file sharing community. BitTorrent price information is available live on Binance.\n\nBTT is the network cryptocurrency that facilitates basic and advanced functionality within the BitTorrent decentralized network. BTT price can be regularly monitored and followed on Binance. The Tron network believes torrenting can be preserved with faster download speeds, increased efficiency, and other improvements made to the file-sharing community.');
  await page.getByRole('button', { name: 'CREATE LAUNCHPAD' }).click();
  await page.locator('#agrredCheck').check();
  await page.getByRole('button', { name: 'CREATE LAUNCHPAD' }).click();
  const page2 = await page.context().waitForEvent('page');
  await page2.getByRole('button', { name: 'Approve' }).click();
  await page2.close();

  // Check Create Success
  await page.waitForTimeout(10000);
  expect(page).toHaveTitle("Test project - Renext App - Renext App");

  // Check Project Name
  const project_name = await page.locator('.price-details').first().locator('h3').innerText();
  // console.log(project_name);
  expect(project_name).toEqual("Test project");

  // Check Token Price
  const token_price = await page.locator('.dsc').first().innerText();
  // console.log(token_price);
  expect(token_price).toEqual("PRICE: 1 AAA = 0.01 RENEC");

  // Check Project Website
  const website = await page.locator('.whitespace-nowrap').first().locator('a').innerText();
  // console.log(website);
  expect(website).toEqual("renext.xyz");

  // Check Min Buy
  const min_buy = await page.locator('.info_value').first().innerText();
  // console.log(min_buy);
  expect(min_buy).toEqual("1 AAA");

  // Check Max Buy
  const max_buy = await page.locator('.info_value').nth(1).innerText();
  // console.log(max_buy);
  expect(max_buy).toEqual("1,000 AAA");

  // Check Summary
  const description = await page.locator('.wmde-markdown').first().locator('p').first().innerText();
  // console.log(description);
  expect(description).toContain("BitTorrent-New is a decentralized ecosystem based");

  // Check Allocation
  const allocation = await page.locator('.allocation').first().locator('span').first().innerText();
  expect(allocation).toEqual("100,000");

  // Check Target Raise
  const target_raise = await page.locator('.targeted-raise-amount').first().locator('span').first().innerText();
  expect(target_raise).toEqual("1,000 RENEC");
  
  // Start Pool
  await page.getByRole('button', { name: 'Start Pool' }).click();
  const page3 = await page.context().waitForEvent('page');
  await page3.getByRole('button', { name: 'Approve' }).click();
  await page3.close();

  // Save Pool Link
  await page.waitForTimeout(5000);
  const link = await page.url();
  console.log(link);
  fs.writeFileSync('data.txt', link);

});

