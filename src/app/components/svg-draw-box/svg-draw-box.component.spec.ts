import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDrawBoxComponent } from './svg-draw-box.component';

describe('SvgDrawBoxComponent', () => {
  let component: SvgDrawBoxComponent;
  let fixture: ComponentFixture<SvgDrawBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDrawBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDrawBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
