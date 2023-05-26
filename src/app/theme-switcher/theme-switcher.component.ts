import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/service/theme.service";

@Component({
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.css"],
})
export class ThemeSwitcherComponent implements OnInit {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = JSON.parse(localStorage.getItem("themeMode") || "false");
    this.themeService.setDarkMode(this.isDarkMode);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}
