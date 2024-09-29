import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './Shorts/shorts.component';
import { ViewNewComponent } from './view-new/view-new.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shorts', component: ShortsComponent },
  { path: 'noticia/:idnoticia', component: ViewNewComponent},
];
