/** Generated from: features\loginsample.feature */
import { test } from "playwright-bdd";

test.describe("Prueba Login", () => {

  test("Verificar que login muestre error sin ningún usuario", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la página de inicio de sesión", null, { page });
    await When("el usuario ingresa su nombre de usuario y contraseña válida", null, { page });
    await Then("Se espera ver un mensaje de éxito en color verde", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
});