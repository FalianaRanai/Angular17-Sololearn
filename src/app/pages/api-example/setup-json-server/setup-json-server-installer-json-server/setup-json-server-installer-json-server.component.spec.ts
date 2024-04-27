import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJsonServerInstallerJsonServerComponent } from './setup-json-server-installer-json-server.component';

describe('SetupJsonServerInstallerJsonServerComponent', () => {
  let component: SetupJsonServerInstallerJsonServerComponent;
  let fixture: ComponentFixture<SetupJsonServerInstallerJsonServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupJsonServerInstallerJsonServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupJsonServerInstallerJsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
