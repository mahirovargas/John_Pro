import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-submenu-item',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './submenu-item.component.html',
  styleUrl: './submenu-item.component.sass',
})
export class SubmenuItemComponent implements OnInit {
  @Input() itemenu: any;
  constructor() {}
  ngOnInit(): void {
    console.log("Error", this.itemenu);
  }
}

