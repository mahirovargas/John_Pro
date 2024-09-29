import { Component, OnInit, Input } from '@angular/core';
import { SubmenuItemComponent } from '../submenu-item/submenu-item.component';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [SubmenuItemComponent],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.sass',
})
export class SubmenuComponent implements OnInit {
  @Input() opciones!: any;
  ngOnInit() {
    console.log(this.opciones);
  }
}
