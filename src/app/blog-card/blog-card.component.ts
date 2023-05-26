import { Component, OnInit } from "@angular/core";

import { BlogCardContent } from "src/interface/blog_card_interface";
import { BlogService } from "src/service/blog.service";

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog-card.component.html",
  styleUrls: ["./blog-card.component.css"],
})
export class BlogCardComponent implements OnInit {
  isLoading: boolean = false;
  blogCards: BlogCardContent[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    this.loadBlogPosts();
  }

  loadBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe((data) => {
      this.blogCards = data.products;
    });
  }
}
