import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoCorporativoComponent } from './gobierno-corporativo.component';

describe('GobiernoCorporativoComponent', () => {
  let component: GobiernoCorporativoComponent;
  let fixture: ComponentFixture<GobiernoCorporativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobiernoCorporativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobiernoCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
