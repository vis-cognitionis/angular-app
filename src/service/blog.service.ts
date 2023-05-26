import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, finalize } from "rxjs";

import { BlogCard } from "src/interface/blog_card_interface";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  private apiUrl: string = "https://dummyjson.com/products";
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogCard> {
    this.loadingSubject.next(true);

    return this.http.get<BlogCard>(this.apiUrl).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }
}
