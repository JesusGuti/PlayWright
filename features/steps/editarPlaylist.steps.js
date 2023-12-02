const { createBdd } = require('playwright-bdd')
const {expect} = require('@playwright/test')
const { Given, When, Then, Before,After } = createBdd()

/**Usando hooks para el login **/
Before(async({page}) => {
     /**PASO 1: Ingresar al link del usuario**/
     await page.goto("https://comicnexus.onrender.com")
     await page.waitForTimeout(5000)
     /**PASO 2: Ingresar credenciales de usuario**/
     const inputNombre = await page.getByPlaceholder('Nombre de usuario')
     const inputPassword = await page.getByPlaceholder('Contraseña')
     await inputNombre.fill('Noobmaster69')
     await inputPassword.fill('2812Ale$')
     await page.waitForTimeout(5000)
     await page.getByRole('button',{name:'Iniciar Sesión'}).click()
})

After(async({page}) => {
     await page.close()
})

Given("el usuario está en la página de editar playlist",async function({page}){
     (await page.waitForSelector('button.btn.btn-secondary.dropdown-toggle')).click();
     await page.waitForTimeout(5000)
     await page.getByRole('link', { name: 'Mis playlists' }).click();
})

When("el usuario haga clic en el botón ፧",async function({page}){
     await page.locator('#dropdown-372').click();
     await page.waitForTimeout(1000)
     await page.getByRole('button', { name: 'Editar Playlist' }).click();
})


When("ponga un nombre de playlist que ya existe",async function({page}){
     const inputNombre = await page.getByPlaceholder('Ingrese el nombre de la playlist')
     await inputNombre.fill("rrrrrrr")
     await page.waitForTimeout(3000)
     await page.getByRole('button',{name:'Guardar cambios'}).click()
})

Then("se muestra una alerta",async function({page}){
     const invalidFeedback = await page.getByText("Existe una playlist con ese nombre.")
     expect(invalidFeedback).toBeVisible()

})
