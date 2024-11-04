import { Component } from '@angular/core';
import { SubmenuItemComponent } from '../submenu-item/submenu-item.component';
import { SubmenuComponent } from '../submenu/submenu.component';
import { ViewNewComponent } from '../view-new/view-new.component';

@Component({
  selector: 'app-menulateral',
  standalone: true,
  imports: [SubmenuComponent, SubmenuItemComponent,ViewNewComponent],
  templateUrl: './menulateral.component.html',
  styleUrl: './menulateral.component.sass',
})
export class MenulateralComponent {
  public menu: any = [
    {
      Title: 'Inicio',
      Icon: 'fa-solid fa-house-user',
      link: '/',
    },

    {
      
      Title: 'shorts',
      Icon: 'fa-solid fa-bomb',
      link: 'shorts',
    },
    {
      Title: 'Vistas',
      Icon: 'fa-solid fa-house-user',
      link: 'view-new',
    },


  ];
  items: any;
}
