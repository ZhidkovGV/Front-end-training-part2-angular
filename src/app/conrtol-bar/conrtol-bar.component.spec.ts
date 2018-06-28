import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConrtolBarComponent } from './conrtol-bar.component';

describe('ConrtolBarComponent', () => {
  let component: ConrtolBarComponent;
  let fixture: ComponentFixture<ConrtolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConrtolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConrtolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
