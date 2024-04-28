import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiPostComponent } from './rest-api-post.component';

describe('RestApiPostComponent', () => {
  let component: RestApiPostComponent;
  let fixture: ComponentFixture<RestApiPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestApiPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestApiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
