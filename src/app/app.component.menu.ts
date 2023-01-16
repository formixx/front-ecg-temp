import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.menu.html',
  styleUrls: ['./app.component.menu.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit(): void {
    var buttonGestionPatients = document.getElementById(
      'button gestion des patients'
    );

    var buttonCatalogues = document.getElementById(
      'button catalogues des modeles'
    );

    var buttonGestionProfil = document.getElementById(
      'button gestion du profil'
    );

    var container = document.getElementById('iframe');

    buttonGestionPatients.addEventListener('click', function () {
      var currentIframe = document.getElementById('current-iframe');
      if (currentIframe) {
        container.removeChild(currentIframe);
      }
      var iframe = document.createElement('iframe');
      iframe.src = './app.component.gestion.profil.html';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.id = 'current-iframe';
      container.appendChild(iframe);
    });

    buttonCatalogues.addEventListener('click', function () {
      var currentIframe = document.getElementById('current-iframe');
      if (currentIframe) {
        container.removeChild(currentIframe);
      }
      var iframe = document.createElement('iframe');
      iframe.src = ' https://en.wikipedia.org/wiki/Poney';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.id = 'current-iframe';
      container.appendChild(iframe);
    });

    buttonGestionProfil.addEventListener('click', function () {
      var currentIframe = document.getElementById('current-iframe');
      if (currentIframe) {
        container.removeChild(currentIframe);
      }
      var iframe = document.createElement('iframe');
      iframe.src = ' https://en.wikipedia.org/wiki/Made in Abyss';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.id = 'current-iframe';
      container.appendChild(iframe);
    });
  }
}
