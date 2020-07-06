import { TestBed } from '@angular/core/testing';

import { ResourceServiceService } from './resource-service.service';

describe('ResourceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceServiceService = TestBed.get(ResourceServiceService);
    expect(service).toBeTruthy();
  });
});
