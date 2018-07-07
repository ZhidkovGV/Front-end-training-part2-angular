import {Component, Input} from '@angular/core';
import {Line} from '../../interfaces/line.interface';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  @Input() linesData: Line[];

}
