import { TestBed } from '@angular/core/testing';

import { LibFleetService } from './lib-fleet.service';

describe('LibResumeService', () => {
  let service: LibFleetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibFleetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
