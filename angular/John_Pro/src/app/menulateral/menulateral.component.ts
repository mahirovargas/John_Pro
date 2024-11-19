import { Component } from '@angular/core';
import { SubmenuItemComponent } from '../submenu-item/submenu-item.component';
import { SubmenuComponent } from '../submenu/submenu.component';
import { AdiccionComponent } from '../adiccion/adiccion.component';
import { EditarComponent } from '../editar/editar.component';
import { GTipoComponent } from '../g.tipo/g.tipo.component';
import { GPreguntasComponent } from '../g.preguntas/g.preguntas.component';
import { ListadoComponent } from '../listado/listado.component';
import { RegistroComponent } from '../registro/registro.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-menulateral',
  standalone: true,
  imports: [SubmenuComponent, SubmenuItemComponent],
  templateUrl: './menulateral.component.html',
  styleUrl: './menulateral.component.sass',
})
export class MenulateralComponent {
  public menu: any = [
    
    {
      Title: 'Home',
      Icon: 'fa-solid fa-house-user',
      link: 'home',
      
    },

    {
      Title: 'G.Preguntas',
      Icon: 'fa-solid fa-house-user',
      Link: '/g.preguntas',
    },
    
    {
      Title: 'G.Tipo',
      Icon: 'fa-solid fa-house-user',
      link: 'g.tipo',
    },

    {
      Title: 'Listado',
      Icon: 'fa-solid fa-house-user',
      link: 'listado',
    },
    {
      Title: 'Adiccion',
      Icon: 'fa-solid fa-house-user',
      link: 'adiccion',
    },
    {
      Title: 'Editar',
      Icon: 'fa-solid fa-house-user',
      link: 'Editar',
    },
  ];
  items: any;
}
