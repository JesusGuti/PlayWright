Feature: Editar playlist
Yo como usuario de la página ComicNexus
Quiero editar una playlist creada preaviamente 
Para poder cambiar/corregir la información de esta playlist

     Background: 
          # Given el usuario está en la página de editar playlist
          # And 
          # Given el usuario tiene playlists creadas
     Scenario: verificar que el nombre de la playlist sea unico
          Given el usuario está en la página de editar playlist

          When el usuario haga clic en el botón ፧
          And ponga un nombre de playlist que ya existe
          Then se muestra una alerta 


     