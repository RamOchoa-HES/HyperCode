import { TestBed } from '@angular/core/testing';

import { EducationServiceService } from './education-service.service';

describe('EducationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationServiceService = TestBed.get(EducationServiceService);
    expect(service).toBeTruthy();
  });
});
