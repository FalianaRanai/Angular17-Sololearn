import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCreerModuleComponent } from './setup-creer-module.component';

describe('SetupCreerModuleComponent', () => {
  let component: SetupCreerModuleComponent;
  let fixture: ComponentFixture<SetupCreerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupCreerModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupCreerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
