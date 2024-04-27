import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupExecuterApplicationComponent } from './setup-executer-application.component';

describe('SetupExecuterApplicationComponent', () => {
  let component: SetupExecuterApplicationComponent;
  let fixture: ComponentFixture<SetupExecuterApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupExecuterApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupExecuterApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
