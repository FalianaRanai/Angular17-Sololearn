import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCreerServiceComponent } from './setup-creer-service.component';

describe('SetupCreerServiceComponent', () => {
  let component: SetupCreerServiceComponent;
  let fixture: ComponentFixture<SetupCreerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupCreerServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupCreerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
