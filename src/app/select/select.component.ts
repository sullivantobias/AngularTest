import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  public options : {width: number, height: number}[] = [
    {width: 100, height: 100},
    {width: 150, height: 150},
    {width: 200, height: 200},
  ]
}
