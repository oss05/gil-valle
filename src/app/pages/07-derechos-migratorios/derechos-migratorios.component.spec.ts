import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechosMigratoriosComponent } from './derechos-migratorios.component';

describe('DerechosMigratoriosComponent', () => {
  let component: DerechosMigratoriosComponent;
  let fixture: ComponentFixture<DerechosMigratoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerechosMigratoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechosMigratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
