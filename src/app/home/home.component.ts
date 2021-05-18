import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  display: any = [];
  prova: any;
  id: any;
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

  // Button
  onClick(id: any) {
    id = (event.target as HTMLInputElement).value;
    (<HTMLInputElement>document.getElementById('operazioni')).value += id;
  }

  onClickDel(id: any) {
    (<HTMLInputElement>document.getElementById('operazioni')).value.slice(0, -1);
  }

  onClickReset() {
    (<HTMLInputElement>document.getElementById('operazioni')).value = "";
  }

  onClickSame() {
    (<HTMLInputElement>document.getElementById('operazioni')).value=eval((<HTMLInputElement>document.getElementById("operazioni")).value);
  }




}
