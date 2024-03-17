import { TestBed } from '@angular/core/testing';

import { RestorantService } from './restorant.service';

describe('RestorantService', () => {
  let service: RestorantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestorantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
