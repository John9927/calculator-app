import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  storedTheme: string = localStorage.getItem('theme-color');

  ngOnInit(): void {

    if(!this.storedTheme) {
      localStorage.setItem('theme-color', 'theme-one');
      this.storedTheme = localStorage.getItem('theme-color');
    }
  }

  setTheme(theme) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }


}
