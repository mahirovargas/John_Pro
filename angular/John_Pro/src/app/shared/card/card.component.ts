import { Component, Input } from '@angular/core';
import { post } from '../../models/post';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  @Input() public item: post = new post();
  onClickLike() {
    if (!this.item.reactions.bandLike) {
      this.item.reactions.likes++;
      this.item.reactions.bandLike = true;
      /*fetch('https://dummyjson.com/posts/'+this.item.id){
        method: 'PUT', /* or PATCH */
       /* headers: { 'Content-Type';'application/json'},
        body: JSON.stringify({
        title: 'I think I should shift to the moon',
        })
    })
      .then(res => res.json())
      .then(console.log);
    }*/


    } else {
      this.item.reactions.likes--;
      this.item.reactions.bandLike = false;
    }
  }

  onClickDislike() {
    if (!this.item.reactions.bandDisLike) {
      this.item.reactions.dislikes++;
      this.item.reactions.bandDisLike = true;
    } else {
      this.item.reactions.dislikes--;
      this.item.reactions.bandDisLike = false;
    }
  }
}
