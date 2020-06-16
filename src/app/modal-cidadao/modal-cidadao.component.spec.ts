import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCidadaoComponent } from './modal-cidadao.component';

describe('ModalCidadaoComponent', () => {
  let component: ModalCidadaoComponent;
  let fixture: ComponentFixture<ModalCidadaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCidadaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCidadaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
