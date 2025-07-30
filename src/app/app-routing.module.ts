import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/contenedor/inicio/inicio.component';
import { ContactoComponent } from './components/contenedor/contacto/contacto.component';
import { AcercaDeComponent } from './components/contenedor/acerca-de/acerca-de.component';
import { ErrorComponent } from './components/contenedor/error/error.component';

const routes: Routes = [
  {path: 'home', component: InicioComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'aboutMe', component: AcercaDeComponent},


    /* RUTAS OBLIGATORIAS*/
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component: ErrorComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
