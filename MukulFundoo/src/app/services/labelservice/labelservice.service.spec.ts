import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { LabelserviceService } from './labelservice.service';

describe('LabelserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers:[LabelserviceService]
  }));

  it('should be created', () => {
    const service: LabelserviceService = TestBed.get(LabelserviceService);
    expect(service).toBeTruthy();
  });
});
