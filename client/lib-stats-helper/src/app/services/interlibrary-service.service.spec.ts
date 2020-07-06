import { TestBed } from '@angular/core/testing';

import { InterlibraryServiceService } from './interlibrary-service.service';

describe('InterlibraryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterlibraryServiceService = TestBed.get(InterlibraryServiceService);
    expect(service).toBeTruthy();
  });
});
