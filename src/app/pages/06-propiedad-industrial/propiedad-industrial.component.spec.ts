import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadIndustrialComponent } from './propiedad-industrial.component';

describe('PropiedadIndustrialComponent', () => {
  let component: PropiedadIndustrialComponent;
  let fixture: ComponentFixture<PropiedadIndustrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadIndustrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
