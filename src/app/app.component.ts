  import { Component, OnInit, AfterViewInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
  import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

  interface Personaje {
    image: string;
    title: string;
    link: string; // Asumo que hay una propiedad 'link' en tu objeto JSON
  }

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements AfterViewInit {
    title = 'repaso';
    personajes: Personaje[] = [];
    mostrarElemento: boolean = true;
    mostrarElementoPelicula: boolean = false;
    link : SafeResourceUrl;
    constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) {
      this.link = sanitizer.bypassSecurityTrustResourceUrl('https://mega.nz/embed/2iwVSC5Q#w3iDb_ov39Yw-TOcGp2ymzNz8xHx6lLGmzE7sfXQzDA');
    }

    onItemClicked(personaje: Personaje): void { 
      this.mostrarElemento = !this.mostrarElemento;
      this.mostrarElementoPelicula = !this.mostrarElementoPelicula;
      
      const videoLink = "https://mega.nz/embed/2iwVSC5Q#w3iDb_ov39Yw-TOcGp2ymzNz8xHx6lLGmzE7sfXQzDA";
      
      // Sanitizar la URL antes de asignarla al atributo src
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(videoLink);
  
      const pelicula = document.getElementById("pelicula");
      
      if (pelicula) {
          // Crea un elemento 'iframe'
          const iframeElement = document.createElement("iframe");
          iframeElement.src = this.link.toString(); // Convertir a cadena segura
          iframeElement.width = "640";
          iframeElement.height = "360";
          iframeElement.frameBorder = "0";
          iframeElement.allowFullscreen = true;
  
          // Limpia el contenido actual del elemento 'pelicula'
          pelicula.innerHTML = '';
  
          // Agrega el elemento 'iframe' al elemento 'pelicula'
          pelicula.appendChild(iframeElement);
      }
  }
  
    


    obtenerDatos(): void {
      const resultados = fetch("../assets/data.json")
          .then(resultados => resultados.json())
          .then(datos => {
              this.personajes = datos.personajes;
              const container = document.getElementById("container");
              this.personajes.forEach((personaje: Personaje) => {
                  const portada = document.createRange().createContextualFragment(`
                    <div class="containerCard">
                      <div class="item" style="background-image: url(${personaje.image})"></div>
                      <h1>${personaje.title}</h1>
                    </div>
                  `);
                
                  portada.querySelector('.containerCard')?.addEventListener("click", () => {
                    this.onItemClicked(personaje); // Pasa el personaje al método
                  });

                  container?.appendChild(portada);
              });
          })
          .catch(error => console.error("Ha ocurrido un error:", error));
    }

    ngAfterViewInit(): void {
      this.obtenerDatos();
    }
  }
