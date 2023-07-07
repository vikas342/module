import { TestBed } from '@angular/core/testing';

import { FormcontrolsService } from './formcontrols.service';

describe('FormcontrolsService', () => {
  let service: FormcontrolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormcontrolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
