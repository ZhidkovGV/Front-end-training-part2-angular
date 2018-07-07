import {Component, Input} from '@angular/core';
import {Line} from '../../interfaces/line.interface';

// this component is pretty useless, and i would get rid of it.
// But it's ok, no harm done, except potential questions on the purpose of it's existence on code review
@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent {
  @Input() linesData: Line[];

}
