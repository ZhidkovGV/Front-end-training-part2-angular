import {AxisDomain, AxisScale} from 'd3-axis';

export interface Scales {
  x: AxisScale<AxisDomain>;
  y: AxisScale<AxisDomain>;
}
