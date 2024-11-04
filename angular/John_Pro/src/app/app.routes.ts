import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { ViewNewComponent } from './view-new/view-new.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { 
    path: 'home',  
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  { path: 'shorts', component: ShortsComponent },
  { path: 'noticia/:idnoticia', component: ViewNewComponent},
  {
    path:"**",
    component: NotFoundComponent
  }
  //{ path: 'view-new', component: ViewNewComponent} acceso a otra prestaña
  
];
