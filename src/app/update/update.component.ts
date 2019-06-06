import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent {
  public options : { width: number, height: number }[] = [
    {width: 100, height: 100},
    {width: 150, height: 150},
    {width: 200, height: 200},
  ]

  public width: string = '50';
  public height: string = '50';
  public color: string = 'green';
  public tooBig: boolean = false;

  resize(width: HTMLInputElement, height: HTMLInputElement): void {
    if (!width && !height) return;
    this.alerting(width, height)
    
    this.width = width.value;
    this.height = height.value
  }

  reset(width: HTMLInputElement, height: HTMLInputElement): void {
    width.value = this.width = '50'
    height.value = this.height = '50'
    this.color = 'green'
    this.tooBig = false;
  }

  resizeSelect(e) {
    this.width = String(this.options[e.target.value].width)
    this.height = String(this.options[e.target.value].height)
  }

  alerting(w: HTMLInputElement, h: HTMLInputElement) {
    if (Number(w.value) >= 100 && Number(h.value) >= 100){
      this.color = 'red';
      this.tooBig = true;
    }
     else { this.color = 'green'; this.tooBig = false }
  }
}
