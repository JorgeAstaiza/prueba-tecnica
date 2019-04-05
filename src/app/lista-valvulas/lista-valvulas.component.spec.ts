import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaValvulasComponent } from './lista-valvulas.component';

describe('ListaValvulasComponent', () => {
  let component: ListaValvulasComponent;
  let fixture: ComponentFixture<ListaValvulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaValvulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaValvulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
