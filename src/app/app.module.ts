import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {SvgDrawBoxComponent} from './components/svg-draw-box/svg-draw-box.component';
import {ControlBarComponent} from './components/control-bar/control-bar.component';
import {LineControlComponent} from './components/line-control/line-control.component';
import {AxesComponent} from './components/axes/axes.component';
import {ControlsComponent} from './components/controls/controls.component';
import {LineComponent} from './components/line/line.component';
import {lineDataReducer} from './store/reducers/line-data.reducer';
import {scalesCountReducer} from './store/reducers/scales-count.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AddNewLine} from './store/effects/new-line.effect';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SvgDrawBoxComponent,
    ControlBarComponent,
    LineControlComponent,
    AxesComponent,
    ControlsComponent,
    LineComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({lineData: lineDataReducer, scales: scalesCountReducer}),
    EffectsModule.forRoot([AddNewLine])
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
