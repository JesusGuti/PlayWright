Feature: Prueba Login
Yo como usuario de la página Sample App
Quiero iniciar sesión 
Para acceder a la aplicación
     Scenario: Verificar que login muestre error sin ningún usuario
          Given el usuario está en la página de inicio de sesión
          When el usuario ingresa su nombre de usuario y contraseña válida
          Then Se espera ver un mensaje de éxito en color verde
          