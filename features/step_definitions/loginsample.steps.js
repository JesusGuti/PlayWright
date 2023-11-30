const {Given, When, Then,After,setDefaultTimeout, AfterAll, Before, BeforeAll} = require('@cucumber/cucumber')
const { chromium,expect } = require('@playwright/test');

let browser
let page

setDefaultTimeout(60 * 1000)
BeforeAll(async() =>{
     browser = await chromium.launch({headless:false})
})

Before(async() =>{
     page = await browser.newPage()
})

After(async() =>{
     await page.close()
})

AfterAll(async() =>{
     await browser.close()
})

Given('el usuario está en la página de inicio de sesión', async function(){
     //Para abrir una instancia de chrome
     page = await browser.newPage()
     await page.goto('http://uitestingplayground.com')
     await page.getByRole('link',{name:'Sample App'}).click()
     await page.waitForLoadState('domcontentloaded')
});
       
When('el usuario ingresa su nombre de usuario y contraseña válida', async function(){
     const inputName = await page.getByPlaceholder('User Name')
     await inputName.fill('pepito')
     await page.waitForLoadState('domcontentloaded')
     await page.locator('input[name="Password"]').fill('pwd')
     await page.getByRole('button',{name:'Log in'}).click()
});
       
Then('Se espera ver un mensaje de éxito en color verde', async function(){
     const successMessage = await page.locator("#loginstatus")
     await expect(successMessage).toHaveClass("text-success")
     await expect(successMessage).toHaveCSS('color','rgb(40, 167, 69)')
});
       
