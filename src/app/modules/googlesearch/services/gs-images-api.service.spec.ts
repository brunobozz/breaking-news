import { TestBed } from '@angular/core/testing';

import { GsImagesApiService } from './gs-images-api.service';

describe('GsImagesApiService', () => {
  let service: GsImagesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsImagesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
