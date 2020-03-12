import { TestBed } from '@angular/core/testing';

import { RecreationService } from './recreation.service';

describe('RecreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecreationService = TestBed.get(RecreationService);
    expect(service).toBeTruthy();
  });
});
