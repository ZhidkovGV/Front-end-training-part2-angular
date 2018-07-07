import { TestBed, inject } from '@angular/core/testing';

import { LinesDataService } from './lines-data.service';

describe('LinesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinesDataService]
    });
  });

  it('should be created', inject([LinesDataService], (service: LinesDataService) => {
    expect(service).toBeTruthy();
  }));
});
