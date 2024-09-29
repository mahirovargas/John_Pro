import { Component } from '@angular/core';
import { SubmenuItemComponent } from '../submenu-item/submenu-item.component';
import { SubmenuComponent } from '../submenu/submenu.component';

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
      Title: 'Inicio',
      Icon: 'fa-solid fa-house-user',
      link: '/',
    },

    {
      Title: 'Shorts',
      Icon: 'fa-solid fa-bomb',
      link: 'Shorts',
    },
    {
      Title: 'Inicio',
      Icon: 'fa-solid fa-house-user',
      link: '',
    },

    {
      Title: 'Shorts',
      Icon: 'fa-solid fa-bomb',
      link: '',
    },
  ];
  item: any;
}
