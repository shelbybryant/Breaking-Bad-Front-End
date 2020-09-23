import { TestBed } from '@angular/core/testing';

import { GetSavedQuoteService } from './get-saved-quote.service';

describe('GetSavedQuoteService', () => {
  let service: GetSavedQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSavedQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
