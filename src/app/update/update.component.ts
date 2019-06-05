import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent {
  public width: string = '50';
  public height: string = '50';
  public color: string = 'green';
  public tooBig: boolean = false;

  resize(width: HTMLInputElement, height: HTMLInputElement): void {
    if (!width && !height) return;
    if (Number(width.value) >= 100 && Number(height.value) >= 100){
      this.color = 'red';
      this.tooBig = true;
    }
     else { this.color = 'green'; this.tooBig = false }
    
    this.width = width.value;
    this.height = height.value
  }

  reset(width: HTMLInputElement, height: HTMLInputElement): void {
    width.value = this.width = '50'
    height.value = this.height = '50'
    this.color = 'green'
    this.tooBig = false;
  }
}
