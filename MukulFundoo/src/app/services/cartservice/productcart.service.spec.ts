import { TestBed } from '@angular/core/testing';

import { ProductcartService } from './productcart.service';

describe('ProductcartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductcartService = TestBed.get(ProductcartService);
    expect(service).toBeTruthy();
  });
});
