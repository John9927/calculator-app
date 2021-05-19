import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatedService {

  storedTheme: string = localStorage.getItem('theme-color');
  constructor() { }

  setTheme(theme: string) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');

    this.themeOne();
    this.themeTwo();
    this.themeThree();
  }

  themeOne() {
    if (this.storedTheme == 'theme-one') {
      var del = document.getElementById("delete");
      var reset = document.getElementById("reset");
      del.style.background = "var(--key-background-1)"
      del.style.borderBottom = "3px solid var(--key-shadow-1)";
      reset.style.background = "var(--key-background-1)";
      reset.style.borderBottom = "3px solid var(--key-shadow-1)";
    }
  }

  themeTwo() {
    if(this.storedTheme == 'theme-two') {
      var del = document.getElementById("delete");
      var reset = document.getElementById("reset");
      del.style.background = "var(--key-background-2)";
      del.style.borderBottom = "3px solid var(--key-shadow-2)";
      reset.style.background = "var(--key-background-2)";
      reset.style.borderBottom = "3px solid var(--key-shadow-2)";
    }
  }

  themeThree() {
    if (this.storedTheme == 'theme-three') {
      var del = document.getElementById("delete");
      var reset = document.getElementById("reset");
      del.style.background = "var(--key-background-3)"
      del.style.borderBottom = "3px solid var(--key-shadow-3)";
      reset.style.background = "var(--key-background-3)";
      reset.style.borderBottom = "3px solid var(--key-shadow-3)";
    }
  }
}
