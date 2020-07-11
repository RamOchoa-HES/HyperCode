import { TestBed, inject } from "@angular/core/testing";

import { AccessServiceServiceService } from "./access-service-service.service";
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

fdescribe("AccessServiceServiceService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
  );

  it("should be created", () => {
    const service: AccessServiceServiceService = TestBed.get(
      AccessServiceServiceService
    );
    expect(service).toBeTruthy();
  });

  it("should get mocked access services", () => {
    inject(
      [HttpTestingController, AccessServiceServiceService],
      (
        httpMock: HttpTestingController,
        service: AccessServiceServiceService
      ) => {
        service.getAccessServices().subscribe((services) => {
          expect(services.length).toBeGreaterThan(0);
        });
      }
    );
  });
});
