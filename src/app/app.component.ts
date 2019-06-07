import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public title: string = "Sullivan";
  public values: string[] = ["app-intro", "app-bindings", "app-update", "app-select"];
  public currentValue: string = "";
}
