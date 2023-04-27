import { TestBed } from '@angular/core/testing';

import { LogingGaurdGuard } from './loging-gaurd.guard';

describe('LogingGaurdGuard', () => {
  let guard: LogingGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogingGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
