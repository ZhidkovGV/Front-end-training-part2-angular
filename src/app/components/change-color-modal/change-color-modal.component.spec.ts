import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColorModalComponent } from './change-color-modal.component';

describe('ChangeColorModalComponent', () => {
  let component: ChangeColorModalComponent;
  let fixture: ComponentFixture<ChangeColorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeColorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeColorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
