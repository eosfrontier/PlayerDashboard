import { TestBed } from '@angular/core/testing';

import { JoomlaIDService } from './joomla-id.service';

describe('JoomlaIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoomlaIDService = TestBed.get(JoomlaIDService);
    expect(service).toBeTruthy();
  });
});
