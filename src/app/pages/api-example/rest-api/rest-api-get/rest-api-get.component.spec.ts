import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiGetComponent } from './rest-api-get.component';

describe('RestApiGetComponent', () => {
  let component: RestApiGetComponent;
  let fixture: ComponentFixture<RestApiGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestApiGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestApiGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
