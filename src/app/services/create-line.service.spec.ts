import { TestBed, inject } from '@angular/core/testing';

import { CreateLineService } from './create-line.service';

describe('CreateLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateLineService]
    });
  });

  it('should be created', inject([CreateLineService], (service: CreateLineService) => {
    expect(service).toBeTruthy();
  }));
});
