import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigioEstrategicoComponent } from './litigio-estrategico.component';

describe('LitigioEstrategicoComponent', () => {
  let component: LitigioEstrategicoComponent;
  let fixture: ComponentFixture<LitigioEstrategicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitigioEstrategicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigioEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
