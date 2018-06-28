import { TestBed, inject } from '@angular/core/testing';

import { GetInitialColorService } from './get-initial-color.service';

describe('GetInitialColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetInitialColorService]
    });
  });

  it('should be created', inject([GetInitialColorService], (service: GetInitialColorService) => {
    expect(service).toBeTruthy();
  }));
});
