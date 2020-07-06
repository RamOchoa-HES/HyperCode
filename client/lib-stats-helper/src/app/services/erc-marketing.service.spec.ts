import { TestBed } from '@angular/core/testing';

import { ErcMarketingService } from './erc-marketing.service';

describe('ErcMarketingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErcMarketingService = TestBed.get(ErcMarketingService);
    expect(service).toBeTruthy();
  });
});
