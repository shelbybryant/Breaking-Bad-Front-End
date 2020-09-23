import { TestBed } from '@angular/core/testing';

import { SaveQuoteService } from './save-quote.service';

describe('SaveQuoteService', () => {
  let service: SaveQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
