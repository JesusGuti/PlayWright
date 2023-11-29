// @ts-check
//Del paquete playwright requiero
const { test, expect } = require('@playwright/test');

/**Test es un metodo
* @param title:El titulo que le vamos a dar el test
  @param testFunction: Hay que poner una función 
  Aqui mando a una pagina y le digo la dirección a la que quiero ir
*/
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Espero que el titulo contenga
  await expect(page).toHaveTitle(/Playwright/);
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


/**Construir un set de tests, para eso se usa describe**/
test.describe("Testeando Navbar",() =>{
    test('has title', async ({ page }) => {
      await page.goto('https://playwright.dev/');
    
      // Espero que el titulo contenga
      await expect(page).toHaveTitle(/Playwright/);
    });
})

test.describe("Testeando tabla",() =>{    
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
})

test("Verificar que la palabra enable este presente", async ({page}) => {
  await page.goto('https://playwright.dev/')
  await expect(page.getByText(/Star/)).toBeVisible()
})

test.describe("Selectores", () =>{
  test("Usando getByLabel",async ({page}) =>{
      await page.goto("https://uitestingplayground.com/textinput")
      const label = await page.getByLabel('Set New Button Name')
      await expect(label).toBeVisible()
      await expect(label).toBeEditable()
  })
})

