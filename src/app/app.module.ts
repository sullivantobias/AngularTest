import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { BindingsComponent } from './bindings/bindings.component';
import { UpdateComponent } from './update/update.component';
import { SelectComponent } from './select/select.component'

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BindingsComponent,
    UpdateComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
