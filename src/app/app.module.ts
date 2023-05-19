import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedComponent } from './featured/featured.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, FeaturedComponent, BlogCardsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
