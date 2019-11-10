import { TestBed } from '@angular/core/testing';

import { LocalStorageInteractionService } from './local-storage-interaction.service';

describe('LocalStorageInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageInteractionService = TestBed.get(LocalStorageInteractionService);
    expect(service).toBeTruthy();
  });
});
