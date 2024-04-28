import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExampleHomeComponent } from './api-example-home.component';

describe('ApiExampleHomeComponent', () => {
  let component: ApiExampleHomeComponent;
  let fixture: ComponentFixture<ApiExampleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiExampleHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiExampleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
