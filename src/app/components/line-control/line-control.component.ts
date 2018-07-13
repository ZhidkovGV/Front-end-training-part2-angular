import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Line} from '../../interfaces/line.interface';
import {UPDATE_LINE} from '../../reducers/line-data.reducer';

@Component({
  selector: 'app-line-control',
  templateUrl: './line-control.component.html',
  styleUrls: ['./line-control.component.css']
})
export class LineControlComponent {
  @Input() lineParams: Line;
  @Output() updateColorAction = new EventEmitter();
  @Output() updateVisibilityAction = new EventEmitter();

  lineVisibilityChanged(visibilityCheckbox: HTMLInputElement) {
    const {color, points, id, $interval} = this.lineParams; // maybe move this to control bar
    const shouldRender = visibilityCheckbox.checked;
    this.updateVisibilityAction.emit({type: UPDATE_LINE, payload: {color, points, id, $interval, shouldRender}});
  }

  colorChanged(colorPicker: HTMLInputElement) {
    const {shouldRender, points, id, $interval} = this.lineParams; // maybe move this to control bar
    const color = colorPicker.value;
    this.updateColorAction.emit({type: UPDATE_LINE, payload: {color, points, id, $interval, shouldRender}});
  }

}
