import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getAllPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url);
  }

  getChosenPost(id: number):Observable<Post>{
    return this.httpClient.get<Post>(this.url + `/${id}`);
  }
}
