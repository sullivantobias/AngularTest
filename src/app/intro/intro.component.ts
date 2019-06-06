import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent {
  public message: string = "Lemon Squeezy"
  public dateFormat: Date = new Date();
}
