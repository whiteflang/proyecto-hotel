import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioreservasComponent } from './fomularioreservas.component';

describe('FomularioreservasComponent', () => {
  let component: FomularioreservasComponent;
  let fixture: ComponentFixture<FomularioreservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomularioreservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomularioreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
