import { Component, OnInit } from "@angular/core";
import { FormationService, iTrainees } from "../formation.service";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  constructor(private srv: FormationService) {}

  public options: { width: number; height: number }[] = [
    { width: 100, height: 100 },
    { width: 150, height: 150 },
    { width: 200, height: 200 }
  ];

  public trainees: iTrainees;

  public ngOnInit(): void {
    this.srv.getTrainees().subscribe(
      trainee => (this.trainees = trainee),

      error => console.error(error),

      () => console.log(this.trainees)
    );
  }
}
