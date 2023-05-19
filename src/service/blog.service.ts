import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { BlogCard } from "src/interface/blog_card_interface";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogCard[]> {
    return this.http.get<BlogCard[]>(this.apiUrl);
  }
}
