import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalaCidadaoComponent } from './fala-cidadao.component';

describe('FalaCidadaoComponent', () => {
  let component: FalaCidadaoComponent;
  let fixture: ComponentFixture<FalaCidadaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalaCidadaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalaCidadaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
