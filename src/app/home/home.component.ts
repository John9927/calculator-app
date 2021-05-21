import { CalculatedService, Action } from './../calculated.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  display: any = [];
  id: any;
  action: Action;

  @ViewChild('operazione') operazione: any;

  constructor(public calculatedService: CalculatedService) {}

  ngOnInit(): void {

    if (!this.calculatedService.storedTheme) {
      localStorage.setItem('theme-color', 'theme-one');
      this.calculatedService.storedTheme = localStorage.getItem('theme-color');
    }

    console.log(this.calculatedService.state$)
  }

  setTheme(theme) {
    localStorage.setItem('theme-color', theme);
    this.calculatedService.storedTheme = localStorage.getItem('theme-color');
  }

  // Button
  onClick(id: any) {
    id = (event.target as HTMLInputElement).value;
    this.operazione.nativeElement.innerHTML += id;
  }

  onClickDel() {
    var str = this.operazione.nativeElement.innerText;
    var res = str.substring(0, str.length - 1);
    this.operazione.nativeElement.innerText = res;
  }

  onClickReset() {
    this.operazione.nativeElement.innerText = "";
  }

  onClickSame() {
    this.operazione.nativeElement.innerText = eval(this.operazione.nativeElement.innerHTML);
  }

}
