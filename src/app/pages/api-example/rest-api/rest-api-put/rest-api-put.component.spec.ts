import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiPutComponent } from './rest-api-put.component';

describe('RestApiPutComponent', () => {
  let component: RestApiPutComponent;
  let fixture: ComponentFixture<RestApiPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestApiPutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestApiPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
