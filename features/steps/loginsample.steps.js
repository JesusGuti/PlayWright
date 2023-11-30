const { expect } = require('@playwright/test')
const { createBdd } =require('playwright-bdd')
const {test} = require('../../Pages/fixtures')
const { Given, When, Then } = createBdd(test);

Given('el usuario está en la página de inicio de sesión', async function({uitestingplayground}){
     await uitestingplayground.goToSampleApp()
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
       
