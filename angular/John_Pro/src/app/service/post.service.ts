import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  all(){
    return this.http.get<post[]>('https://dummyjson.com/post');


  }
}