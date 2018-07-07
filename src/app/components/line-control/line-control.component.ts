import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {Line} from '../../interfaces/line.interface';
import {Data$Service} from '../../services/data-$.service';

@Component({
  selector: 'app-line-control',
  templateUrl: './line-control.component.html',
  styleUrls: ['./line-control.component.css']
})
export class LineControlComponent implements OnInit, AfterContentInit {
  @Input() lineParams: Line;

  constructor(private data$Service: Data$Service) {
  }

  lineVisibilityChanged(visibilityCheckbox: HTMLInputElement) {
    this.data$Service.update$Visibility(this.lineParams.$interval, this.lineParams.color, this.lineParams.id, this.lineParams.points, visibilityCheckbox.checked) // TSLINT TSLINT TSLINT
  }

  colorChanged(colorPicker: HTMLInputElement) {
    this.data$Service.update$Color(this.lineParams.$interval, colorPicker.value, this.lineParams.id, this.lineParams.points);
  }

  // why
  ngOnInit() {

  }

  // why
  ngAfterContentInit() {

  }

}
