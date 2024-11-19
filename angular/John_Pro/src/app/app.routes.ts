import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { SubmenuComponent } from './submenu/submenu.component';
import { SubmenuItemComponent } from './submenu-item/submenu-item.component';
import { AdiccionComponent } from './adiccion/adiccion.component';
import { EditarComponent } from './editar/editar.component';
import { GTipoComponent } from './g.tipo/g.tipo.component';
import { GPreguntasComponent } from './g.preguntas/g.preguntas.component';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { Title } from '@angular/platform-browser';


import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "registro",
    pathMatch: "full"
  },
  { 
    path: 'registro',  
    loadComponent: () => import('./registro/registro.component').then(c => c.RegistroComponent)
  
  },

  { path: 'home', component: HomeComponent},
  { path: 'G.Tipo', component: GTipoComponent},
  { path: 'G.Preguntas', component: GPreguntasComponent},
  { path: 'listado', component: ListadoComponent},
  { path: 'Listado', component: ListadoComponent},
  { path: 'Adiccion', component: AdiccionComponent},
  { path: 'Editar', component: EditarComponent},

  
 


  {
    path:"**",
    component: NotFoundComponent
  }
 
  
];
