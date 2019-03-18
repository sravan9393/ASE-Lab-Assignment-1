import { TestBed } from '@angular/core/testing';

import { CustServiceService } from './cust-service.service';

describe('CustServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustServiceService = TestBed.get(CustServiceService);
    expect(service).toBeTruthy();
  });
});
