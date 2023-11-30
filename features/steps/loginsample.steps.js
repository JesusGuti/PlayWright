const { expect } = require('@playwright/test')
const { createBdd } =require('playwright-bdd')

const { Given, When, Then } = createBdd();

let browser
let page

// setDefaultTimeout(60 * 1000)
// BeforeAll(async() =>{
//      browser = await chromium.launch({headless:false})
// })

// Before(async() =>{
//      page = await browser.newPage()
// })
//     //Para abrir una instancia de chrome
// page = await browser.newPage()
// page = await browser.newPage()
// After(async() =>{
//      await page.close()
// })

// AfterAll(async() =>{
//      await browser.close()
// })

Given('el usuario está en la página de inicio de sesión', async function({page}){
     await page.goto('http://uitestingplayground.com')
     await page.getByRole('link',{name:'Sample App'}).click()
     await page.waitForLoadState('domcontentloaded')
});
       
When('el usuario ingresa su nombre de usuario y contraseña válida', async function({page}){
     const inputName = await page.getByPlaceholder('User Name')
     await inputName.fill('pepito')
     await page.waitForLoadState('domcontentloaded')
     await page.locator('input[name="Password"]').fill('pwd')
     await page.getByRole('button',{name:'Log in'}).click()
});
       
Then('Se espera ver un mensaje de éxito en color verde', async function({page}){
     const successMessage = await page.locator("#loginstatus")
     await expect(successMessage).toHaveClass("text-success")
     await expect(successMessage).toHaveCSS('color','rgb(40, 167, 69)')
});
       
