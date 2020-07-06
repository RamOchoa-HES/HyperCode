import { TestBed } from '@angular/core/testing';

import { TechnicalServiceService } from './technical-service.service';

describe('TechnicalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnicalServiceService = TestBed.get(TechnicalServiceService);
    expect(service).toBeTruthy();
  });
});
