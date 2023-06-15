import { TestBed } from '@angular/core/testing';

import { FormreturnserviceService } from './formreturnservice.service';

describe('FormreturnserviceService', () => {
  let service: FormreturnserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormreturnserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
