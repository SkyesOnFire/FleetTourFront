import { TestBed } from '@angular/core/testing';

import { CadastroOnibusService } from './cadastro-onibus.service';

describe('CadastroOnibusService', () => {
  let service: CadastroOnibusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroOnibusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
