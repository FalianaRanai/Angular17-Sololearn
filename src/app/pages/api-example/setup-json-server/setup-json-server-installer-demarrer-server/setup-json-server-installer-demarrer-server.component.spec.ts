import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJsonServerInstallerDemarrerServerComponent } from './setup-json-server-installer-demarrer-server.component';

describe('SetupJsonServerInstallerDemarrerServerComponent', () => {
  let component: SetupJsonServerInstallerDemarrerServerComponent;
  let fixture: ComponentFixture<SetupJsonServerInstallerDemarrerServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupJsonServerInstallerDemarrerServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupJsonServerInstallerDemarrerServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
