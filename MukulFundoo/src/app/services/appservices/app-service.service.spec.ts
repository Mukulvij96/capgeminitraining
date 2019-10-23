import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { AppServiceService } from './app-service.service';

describe('AppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers:[AppServiceService]
  }));

  it('should be created', () => {
    const service: AppServiceService = TestBed.get(AppServiceService);
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
    const service: AppServiceService = TestBed.get(AppServiceService);
    expect(service).toBeTruthy();
   });
});
