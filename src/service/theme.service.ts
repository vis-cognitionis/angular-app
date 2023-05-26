import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

//@Injectable decorator marks ThemeService as an Angular service.
//providedIn: "root" makes the service available in the root module of the application.
@Injectable({
  providedIn: "root",
})
export class ThemeService {
  //This variable holds the dark mode or light mode state of the theme.
  private _darkModeSubject = new BehaviorSubject<boolean>(
    this.getInitialMode()
  );
  //It allows you to follow the dark mode or light mode state of this theme.
  darkMode$ = this._darkModeSubject.asObservable();

  constructor() {
    this.setInitialMode();
  }

  private getInitialMode(): boolean {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? JSON.parse(savedMode) : false;
  }

  private setInitialMode(): void {
    const savedMode = this.getInitialMode();
    this.setDarkMode(savedMode);
  }

  setDarkMode(isDarkMode: boolean): void {
    this._darkModeSubject.next(isDarkMode);
    localStorage.setItem("themeMode", JSON.stringify(isDarkMode));
  }
}
