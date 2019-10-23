import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { DataserviceService } from './dataservice.service';

describe('DataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
imports:[HttpClientTestingModule],
providers:[DataserviceService]
  }));

  it('should be created', () => {
    const service: DataserviceService = TestBed.get(DataserviceService);
    expect(service).toBeTruthy();
  });
});
