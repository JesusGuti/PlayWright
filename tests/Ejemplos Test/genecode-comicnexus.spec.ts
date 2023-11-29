import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://comicnexus.onrender.com/');
  await page.getByPlaceholder('Nombre de usuario').click();
  await page.getByPlaceholder('Nombre de usuario').fill('ComicNexus');
  await page.getByPlaceholder('Contraseña').fill('ComicNexus123');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
  await page.getByRole('link', { name: 'Mis playlists' }).click();
  await page.locator('#dropdown-367').click();
  await page.getByRole('button', { name: 'Editar Playlist' }).click();
  await page.getByPlaceholder('Ingrese el nombre de la').click();
  await page.getByPlaceholder('Ingrese el nombre de la').fill('');
  await page.getByRole('button', { name: 'Guardar cambios' }).click();
  await page.getByPlaceholder('Ingrese el nombre de la').click();
  await page.getByRole('button', { name: 'Agregar Imagen' }).click();
  await page.getByRole('button', { name: 'Agregar Imagen' }).setInputFiles('pexels-lisa-fotios-1540258 (1).jpg');
  await page.getByRole('button', { name: 'Guardar cambios' }).click();
});