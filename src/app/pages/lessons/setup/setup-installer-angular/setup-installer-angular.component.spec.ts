import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInstallerAngularComponent } from './setup-installer-angular.component';

describe('SetupInstallerAngularComponent', () => {
  let component: SetupInstallerAngularComponent;
  let fixture: ComponentFixture<SetupInstallerAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupInstallerAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupInstallerAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
