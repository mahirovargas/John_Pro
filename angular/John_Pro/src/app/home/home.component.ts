import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { post } from '../models/post';
import { MenulateralComponent } from '../menulateral/menulateral.component';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'], // Cambiado a styleUrls
})
export class HomeComponent implements OnInit {
/*
  public items: post[] = [
    {
      id: 1,
      title: 'Mundo de la noticia', // Asegúrate de usar las propiedades correctas
      body: 'In recent anime news for September 2024, the highly anticipated anime adaptation of *"Overlord: The Sacred Kingdom"* has been released, delighting fans with new content from the hit series.',
      tags: 'https://www.facebook.com',
    },
    {
      id: 2,
      title: 'Noticias 2', // Cambiado a title
      body: 'Texto de Noticias 2', // Cambiado a body
      tags: 'https://www.facebook.com', // Cambiado a tags
    },
    {
      id: 3,
      title: 'Noticias 3', // Cambiado a title
      body: 'Texto de Noticias 3', // Cambiado a body
      tags: 'https://www.facebook.com', // Cambiado a tags
    },
    {
      id: 4,
      title: 'Noticias 4', // Cambiado a title
      body: 'Texto de Noticias 4', // Cambiado a body
      tags: 'https://www.facebook.com', // Cambiado a tags
    },
  ]; * */

  public items: post[] = [];

  constructor(private httpService: PostService) {}
  
  ngOnInit(): void {
    this.httpService.all().subscribe((data: any) => {
     this.items = data.posts
    });

  }
}
