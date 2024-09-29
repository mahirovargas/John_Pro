import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-new',
  standalone: true,
  imports: [],
  templateUrl: './view-new.component.html',
  styleUrl: './view-new.component.sass'
})
export class ViewNewComponent implements OnInit{
  public id!: number ;
  constructor(public params: ActivatedRoute) {
    
  }
  ngOnInit(): void {

      this.id = this.params.snapshot.params['idnoticia'];
      console.log(this.id);

  }
}
