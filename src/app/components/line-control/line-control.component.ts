import {Component, Input} from '@angular/core';
import {Line} from '../../interfaces/line.interface';
import {LinesDataService} from '../../services/lines-data.service';

@Component({
  selector: 'app-line-control',
  templateUrl: './line-control.component.html',
  styleUrls: ['./line-control.component.css']
})
export class LineControlComponent {
  @Input() lineParams: Line;

  constructor(private data$Service: LinesDataService) {
  }

  lineVisibilityChanged(visibilityCheckbox: HTMLInputElement) {
    this.data$Service.updateLineVisibility(
      this.lineParams.$interval, this.lineParams.color, this.lineParams.id, this.lineParams.points, visibilityCheckbox.checked
    );
  }

  colorChanged(colorPicker: HTMLInputElement) {
    this.data$Service.updateLineColor(this.lineParams.$interval, colorPicker.value, this.lineParams.id, this.lineParams.points);
  }

}
