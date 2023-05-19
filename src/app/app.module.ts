import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { FeaturedComponent } from "./featured/featured.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogCardComponent } from './blog-card/blog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturedComponent,
    BlogListComponent,
    BlogCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
