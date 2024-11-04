import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-new',
  standalone: true,
  templateUrl: './view-new.component.html',
  styleUrls: ['./view-new.component.sass'] 
})
export class ViewNewComponent implements OnInit{
  public id!: number ;
  constructor(public params: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.params.params.subscribe((params) => {
      this.id = params['idnoticia'];
    });
  }
}
