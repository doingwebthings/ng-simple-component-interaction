import { TestBed } from '@angular/core/testing';

import { OuterService } from './outer.service';

describe('OuterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterService = TestBed.get(OuterService);
    expect(service).toBeTruthy();
  });
});
