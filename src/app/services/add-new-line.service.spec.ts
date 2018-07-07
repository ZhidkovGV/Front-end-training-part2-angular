import { TestBed, inject } from '@angular/core/testing';

import { AddNewLineService } from './add-new-line.service';

describe('AddNewLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNewLineService]
    });
  });

  it('should be created', inject([AddNewLineService], (service: AddNewLineService) => {
    expect(service).toBeTruthy();
  }));
});
