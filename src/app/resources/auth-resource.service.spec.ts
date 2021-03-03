import { TestBed } from '@angular/core/testing';

import { AuthResourceService } from './auth-resource.service';

describe('AuthResourceService', () => {
  let service: AuthResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
