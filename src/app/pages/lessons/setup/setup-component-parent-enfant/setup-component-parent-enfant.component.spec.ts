import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupComponentParentEnfantComponent } from './setup-component-parent-enfant.component';

describe('SetupComponentParentEnfantComponent', () => {
  let component: SetupComponentParentEnfantComponent;
  let fixture: ComponentFixture<SetupComponentParentEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupComponentParentEnfantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupComponentParentEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
