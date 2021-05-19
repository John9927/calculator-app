import { CalculatedService } from './../calculated.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  constructor(public calculatedService: CalculatedService) { }

  ngOnInit(): void {
  }

}
