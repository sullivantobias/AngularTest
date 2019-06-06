import { Pipe, PipeTransform } from "@angular/core";
import { Options } from "./update/update.component";

@Pipe({
  name: "unit"
})
export class UnitPipe implements PipeTransform {
  transform(value: Options, unit: string = "px"): any {
    return value + unit;
  }
}
