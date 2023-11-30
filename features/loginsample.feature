Feature: Prueba Login
Yo como usuario de la página Sample App
Quiero iniciar sesión 
Para acceder a la aplicación
     #Este background es para todos los test
     Background:
          Given el usuario está en la página de inicio de sesión
     
     Scenario: Verificar que login muestre error sin ningún usuario
          When el usuario ingresa su nombre de usuario y contraseña válida
          Then Se espera ver un mensaje de éxito en color verde
          
     Scenario: Estado inicial de la página login
          Then Se espera ver un mensaje sin usuario