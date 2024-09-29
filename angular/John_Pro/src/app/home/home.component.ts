import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { noticia } from '../models/noticia';
import { MenulateralComponent } from '../menulateral/menulateral.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  public noticias: noticia[] = [
    {
      id: 1,
      titulo: 'Mundo de la noticia',
      texto:
        'In recent anime news for September 2024, the highly anticipated anime adaptation of *"Overlord: The Sacred Kingdom"* has been released, delighting fans with new content from the hit series. Additionally, *"Uzumaki,"* based on the horror manga by Junji Ito, is also set to air this month, bringing more eerie suspense to the anime world. The fall anime season is shaping up with more releases, including continuations of *Bleach*, *Re:Zero*, and more popular series【16†source】【16†source】.',
      url: 'https://www.facebook.com',
    },

    {
      id: 2,
      titulo: 'Noticias 2',
      texto: 'Textod de Noticias 2',
      url: 'https://www.facebook.com',
    },

    {
      id: 3,
      titulo: 'Noticias 3',
      texto: 'Textod de Noticias 3',
      url: 'https://www.facebook.com',
    },

    {
      id: 4,
      titulo: 'Noticias 4',
      texto: 'Textod de Noticias 4',
      url: 'https://www.facebook.com',
    },
  ];
}
