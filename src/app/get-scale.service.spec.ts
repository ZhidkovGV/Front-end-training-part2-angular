import { TestBed, inject } from '@angular/core/testing';

import { GetScaleService } from './get-scale.service';

describe('GetScaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetScaleService]
    });
  });

  it('should be created', inject([GetScaleService], (service: GetScaleService) => {
    expect(service).toBeTruthy();
  }));
});
