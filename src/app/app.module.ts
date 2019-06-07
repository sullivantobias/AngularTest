import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IntroComponent } from "./intro/intro.component";
import { BindingsComponent } from "./bindings/bindings.component";
import { UpdateComponent } from "./update/update.component";
import { SelectComponent } from "./select/select.component";
import { UnitPipe } from "./unit.pipe";
import { HoveringDirective } from './hovering.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BindingsComponent,
    UpdateComponent,
    SelectComponent,
    UnitPipe,
    HoveringDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
