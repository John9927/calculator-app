import { CalculatedService } from './../calculated.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @ViewChild('result') result: any;
  @ViewChild('numbers') numbers: any;

  number: any;
  results: any;
  variableNumber = false;
  variableResult = false;
  constructor(public calculatedService: CalculatedService) { }

  ngOnInit(): void {
    this.calculatedService.state$.subscribe(res => {
      this.number = res.numbers[0] + res.operation + res.numbers[1];
      this.results = res.result;

      if (this.number) {
        this.variableNumber = true;
        this.variableResult = false;
      } else {
        this.variableNumber = false;
        this.variableResult = true;
      }
    });
  }

}
