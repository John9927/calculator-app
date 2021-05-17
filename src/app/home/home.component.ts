import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  active: any;
  ngOnInit(): void {
  }

  one() {
    document.getElementById('container__calc').style.background = "hsl(222, 26%, 31%)"

  }


  two() {
    document.getElementById('container__calc').style.background = " hsl(0, 0%, 90%)"
  }


  three() {
    document.getElementById('container__calc').style.background = "hsl(268, 75%, 9%)"
    document.getElementById('container__calc').style.color = "white"

  }

}
