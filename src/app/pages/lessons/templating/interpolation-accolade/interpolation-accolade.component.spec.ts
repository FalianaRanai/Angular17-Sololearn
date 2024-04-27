import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationAccoladeComponent } from './interpolation-accolade.component';

describe('InterpolationAccoladeComponent', () => {
  let component: InterpolationAccoladeComponent;
  let fixture: ComponentFixture<InterpolationAccoladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpolationAccoladeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationAccoladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
