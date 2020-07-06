import { TestBed } from '@angular/core/testing';

import { ElectronicServiceService } from './electronic-service.service';

describe('ElectronicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectronicServiceService = TestBed.get(ElectronicServiceService);
    expect(service).toBeTruthy();
  });
});
