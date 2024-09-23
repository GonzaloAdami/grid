import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeComponent } from './app/home/home.component';
import { SystemMoviesComponent } from './app/peliculas/system-movies.component';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
