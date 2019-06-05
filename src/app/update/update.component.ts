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

  resizeWidth(focusEvent?: Event): void {
    if (!focusEvent) return
    this.width = (focusEvent.target as HTMLInputElement).value

    if (Number(this.width) > 100) this.color = 'red'
  }
  resizeHeight(focusEvent?: Event): void {
    if (!focusEvent) return
    this.height = (focusEvent.target as HTMLInputElement).value
  }
}
