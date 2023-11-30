const { test, expect } = require('@playwright/test');

test.describe("Pruebas de Sample App",() =>{
     test("Verificar que login muestre error sin ningún usuario",async({page}) =>{
          //Vamos a la página
          await page.goto("https://uitestingplayground.com")
          //Vamos a localizar un link con el nombre Sample App
          const link = await page.getByRole('link',{name:'Sample App'})
          await link.click()
          
          //Vamos a esperar antes de hacer click
          await page.waitForTimeout(2000)
          //Vamos a localizar el botón con el nombre "Log in"
          const button = await page.getByRole('button',{name:'Log in'})
          await button.click()


          //Vamos a obtener un mensaje de error que debe aparecer en el DOM debido al click
          const errorMessage = await page.getByText('Invalid username/password')     
          await expect(errorMessage).toBeVisible()
          await expect(errorMessage).toHaveCSS('color','rgb(220, 53, 69)')
     })

     test("Verificar que login funciones con contraseña valida",async ({page}) =>{
          await page.goto("https://uitestingplayground.com")
          await page.getByRole('link',{name: 'Sample App'}).click()
          //Vamos a esperar antes de hacer click
          await page.waitForLoadState('domcontentloaded')
          const inputName = await page.getByPlaceholder('User Name')
          // Fill sirve para rellenar un campo
          await inputName.fill('pepito')
          await page.waitForLoadState('domcontentloaded')
          await page.locator('input[name="Password"]').fill('pwd')
          await page.getByRole('button',{name:'Log in'}).click()
          const successMessage = await page.locator("#loginstatus")
          await expect(successMessage).toHaveClass("text-danger")
          await expect(successMessage).toHaveCSS('color','rgb(40, 167, 69)')
     })
})



