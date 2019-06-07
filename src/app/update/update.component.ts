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
    { width: 50, height: 50 },
    { width: 60, height: 60 },
    { width: 80, height: 80 }
  ];

  public color: string = "green";
  public tooBig: boolean = false;
  public widthValue: string = "30";
  public heightValue: string = "30";
  public optionSelected: Options = this.options[0];
  public unit: string = "px";

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
