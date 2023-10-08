import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOnibusComponent } from './index-onibus.component';

describe('IndexOnibusComponent', () => {
  let component: IndexOnibusComponent;
  let fixture: ComponentFixture<IndexOnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexOnibusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
