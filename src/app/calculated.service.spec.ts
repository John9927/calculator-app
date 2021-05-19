import { TestBed } from '@angular/core/testing';

import { CalculatedService } from './calculated.service';

describe('CalculatedService', () => {
  let service: CalculatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
