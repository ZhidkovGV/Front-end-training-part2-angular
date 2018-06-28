import { TestBed, inject } from '@angular/core/testing';

import { AddNew$Service } from './add-new-$.service';

describe('AddNew$Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNew$Service]
    });
  });

  it('should be created', inject([AddNew$Service], (service: AddNew$Service) => {
    expect(service).toBeTruthy();
  }));
});
