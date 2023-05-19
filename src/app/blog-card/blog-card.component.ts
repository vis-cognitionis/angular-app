import { Component } from "@angular/core";
import { BlogCard, BlogService } from "src/service/blog.service";

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog-card.component.html",
  styleUrls: ["./blog-card.component.css"],
})
export class BlogCardComponent {
  blogCards: BlogCard[];
  constructor(private blogService: BlogService) {
    this.blogCards = [];
  }
  ngOnInit() {
    this.blogService.getBlogPosts().subscribe((posts) => {
      this.blogCards = posts;
    });
  }
}
