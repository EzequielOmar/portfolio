import { TestBed } from '@angular/core/testing';

import { LoadProyectsService } from './load-proyects.service';

describe('LoadProyectsService', () => {
  let service: LoadProyectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadProyectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
