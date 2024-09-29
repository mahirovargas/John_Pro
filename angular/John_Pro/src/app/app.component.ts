import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenulateralComponent } from './menulateral/menulateral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenulateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'John_Pro';
}
