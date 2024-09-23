import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SystemMoviesComponent } from './peliculas/system-movies.component';

const routes: Routes = [
  {path: 'peliculas', component: SystemMoviesComponent},
  {path: 'home', component: AppComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
