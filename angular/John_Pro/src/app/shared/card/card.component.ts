import { Component, Input } from '@angular/core';
import { noticia } from '../../models/noticia';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  @Input() noticia: noticia | undefined;
}
