import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SvgDrawBoxComponent } from './svg-draw-box/svg-draw-box.component';
import { LineComponent } from './line/line.component';
import { ConrtolBarComponent } from './conrtol-bar/conrtol-bar.component';
import { LineControlComponent } from './line-control/line-control.component';
import { ChangeColorModalComponent } from './change-color-modal/change-color-modal.component';
import { AxesComponent } from './axes/axes.component';
import { ControlsComponent } from './controls/controls.component';
import {Data$Service} from './data-$.service';
import {AddNew$Service} from './add-new-$.service';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SvgDrawBoxComponent,
    LineComponent,
    ConrtolBarComponent,
    LineControlComponent,
    ChangeColorModalComponent,
    AxesComponent,
    ControlsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
