import { CalculatedService } from './../calculated.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public calculatedService: CalculatedService) {}

  ngOnInit(): void {
    if (!this.calculatedService.storedTheme) {
      localStorage.setItem('theme-color', 'theme-one');
      this.calculatedService.storedTheme = localStorage.getItem('theme-color');
    }
  }

  setTheme(theme) {
    localStorage.setItem('theme-color', theme);
    this.calculatedService.storedTheme = localStorage.getItem('theme-color');
  }
}
