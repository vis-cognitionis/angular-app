import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { FeaturedComponent } from "./featured/featured.component";
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturedComponent,
    BlogCardComponent,
    ThemeSwitcherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
