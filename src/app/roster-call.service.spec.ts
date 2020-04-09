import { TestBed } from '@angular/core/testing';

import { RosterCallService } from './roster-call.service';

describe('RosterCallService', () => {
  let service: RosterCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
