import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SvgDrawBoxComponent } from './svg-draw-box/svg-draw-box.component';
import { ConrtolBarComponent } from './conrtol-bar/conrtol-bar.component';
import { LineControlComponent } from './line-control/line-control.component';
import { ChangeColorModalComponent } from './change-color-modal/change-color-modal.component';
import { AxesComponent } from './axes/axes.component';
import { ControlsComponent } from './controls/controls.component';
import { LineComponent } from './line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SvgDrawBoxComponent,
    ConrtolBarComponent,
    LineControlComponent,
    ChangeColorModalComponent,
    AxesComponent,
    ControlsComponent,
    LineComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ],

})
export class AppModule { }
