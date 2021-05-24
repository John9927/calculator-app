import { CalculatedService } from './../calculated.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, AfterViewInit {
  @ViewChild('result') result: any;
  @ViewChild('numbers') numbers: any;

  number: any;
  results: any;
  constructor(public calculatedService: CalculatedService) { }

  ngAfterViewInit() {
    if (this.calculatedService.storedTheme == "theme-one") {
      this.numbers.nativeElement.setAttribute("style", "background: var(--screen-background-1)")
      this.result.nativeElement.setAttribute("style", "background: var(--screen-background-1)")
    } else if (this.calculatedService.storedTheme == "theme-two") {
      this.numbers.nativeElement.setAttribute("style", "background: var(--screen-background-2)")
      this.result.nativeElement.setAttribute("style", "background: var(--screen-background-2)")
    } else if (this.calculatedService.storedTheme == "theme-three") {
      this.numbers.nativeElement.setAttribute("style", "background: var(--screen-background-2)")
      this.result.nativeElement.setAttribute("style", "background: var(--screen-background-2)")
    }
  }

  ngOnInit(): void {
    this.calculatedService.state$.subscribe(res => {
      this.number = res.numbers[0] + res.operation + res.numbers[1];
      this.results = res.result;
    });

    setInterval(() => {
      if (this.results == null) {
        document.getElementById('container').style.display = "flex";
        document.getElementById('display').style.display = "none";
      }
      else {
        document.getElementById('container').style.display = "none";
        document.getElementById('display').style.display = "flex";
      }
    }, 10);
  }

}
