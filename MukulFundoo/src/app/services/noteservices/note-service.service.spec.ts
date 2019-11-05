import { TestBed } from '@angular/core/testing';

import { NotesService } from '../noteservices/note-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotesSerivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[NotesService]
  }));

  it('should be created', () => {
    const service: NotesService = TestBed.get(NotesService);
    expect(service).toBeTruthy();
  });
});