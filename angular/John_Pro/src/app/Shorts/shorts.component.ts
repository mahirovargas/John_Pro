import { Component } from '@angular/core';
import { SubmenuComponent } from '../submenu/submenu.component';
import { SubmenuItemComponent } from '../submenu-item/submenu-item.component';

@Component({
  selector: 'app-shorts',
  standalone: true,
  imports: [SubmenuComponent, SubmenuItemComponent,ShortsComponent],
  templateUrl: './shorts.component.html',
  styleUrl: './shorts.component.sass',
})
export class ShortsComponent {}
