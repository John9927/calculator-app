import { CalculatedService } from './../calculated.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() onClicks: EventEmitter<any> = new EventEmitter();
  @Output() onClicksDel: EventEmitter<any> = new EventEmitter();
  @Output() onClicksReset: EventEmitter<any> = new EventEmitter();
  @Output() onClicksSame: EventEmitter<any> = new EventEmitter();


  constructor(public calculatedService: CalculatedService) { }

  ngOnInit(): void {
    if (this.calculatedService.storedTheme) {
      this.calculatedService.storedTheme = localStorage.getItem('theme-color');
    }
  }

  onClick(id: string) {
    this.onClicks.emit(id);
  }

  onClickDel() {
    this.onClicksDel.emit();
  }

  onClickReset() {
    this.onClicksReset.emit();
  }

  onClickSame() {
    this.onClicksSame.emit();
  }
}
