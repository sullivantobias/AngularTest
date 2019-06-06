import { Component } from "@angular/core";

export interface Options {
  width: number;
  height: number;
}

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent {
  public options: Options[] = [
    { width: 30, height: 30 },
    { width: 100, height: 100 },
    { width: 150, height: 150 },
    { width: 200, height: 200 }
  ];

  public color: string = "green";
  public tooBig: boolean = false;
  public widthValue: string = "50";
  public heightValue: string = "50";
  public optionSelected: Options;

  resizeSelect(e: Options) {
    this.widthValue = String(e.width);
    this.heightValue = String(e.height);

    this.alerting();
  }

  alerting() {
    if (Number(this.widthValue) >= 100 && Number(this.heightValue) >= 100) {
      this.color = "red";
      this.tooBig = true;
    } else {
      this.color = "green";
      this.tooBig = false;
    }
  }
}
