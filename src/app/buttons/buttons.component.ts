import { CalculatedService } from './../calculated.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  results: any | null;

  constructor(public calculatedService: CalculatedService) { }
  ngOnInit(): void { }

}

