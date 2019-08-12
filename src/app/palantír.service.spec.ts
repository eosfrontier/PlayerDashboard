import { TestBed } from '@angular/core/testing';

import { PalantírService } from './palantír.service';

describe('PalantírService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalantírService = TestBed.get(PalantírService);
    expect(service).toBeTruthy();
  });
});
