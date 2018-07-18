import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Line} from '../../interfaces/line.interface';
import {UPDATE_COLOR, UPDATE_VISIBILITY} from '../../store/actions';

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
    const {id} = this.lineParams; // maybe move this to control bar
    const shouldRender = visibilityCheckbox.checked;
    this.updateVisibilityAction.emit({type: UPDATE_VISIBILITY, payload: {id, shouldRender}});
  }

  colorChanged(colorPicker: HTMLInputElement) {
    const {id} = this.lineParams; // maybe move this to control bar
    const color = colorPicker.value;
    this.updateColorAction.emit({type: UPDATE_COLOR, payload: {color, id}});
  }

}
