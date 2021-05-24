import { CalculatedService } from './../calculated.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements AfterViewInit {
  @ViewChild('theme') theme: any;

  constructor(public calculatedService: CalculatedService) { }

  ngAfterViewInit() {
    setInterval(() => {
      if(this.calculatedService.storedTheme == "theme-one") {
        this.theme.nativeElement.setAttribute("style", "background: var(--key-background-toggle-1)")
      } else if(this.calculatedService.storedTheme == "theme-two") {
        this.theme.nativeElement.setAttribute("style", "background: var(--key-background-toggle-1)")
      } else if(this.calculatedService.storedTheme == "theme-three") {
        this.theme.nativeElement.setAttribute("style", "background: var(--key-background-3)")
      }
    })
  }
}
