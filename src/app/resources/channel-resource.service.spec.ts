import { TestBed } from '@angular/core/testing';

import { ChannelResourceService } from './channel-resource.service';

describe('ChannelResourceService', () => {
  let service: ChannelResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
