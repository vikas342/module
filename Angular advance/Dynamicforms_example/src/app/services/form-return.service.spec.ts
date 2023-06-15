  import { TestBed } from '@angular/core/testing';

import { FormReturnService } from './form-return.service';

describe('FormReturnService', () => {
  let service: FormReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
