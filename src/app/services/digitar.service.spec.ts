import { TestBed } from '@angular/core/testing';

import { DigitarService } from './digitar.service';

describe('DigitarService', () => {
  let service: DigitarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
