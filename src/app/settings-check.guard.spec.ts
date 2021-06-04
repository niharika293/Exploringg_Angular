import { TestBed } from '@angular/core/testing';

import { SettingsCheckGuard } from './settings-check.guard';

describe('SettingsCheckGuard', () => {
  let guard: SettingsCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SettingsCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
