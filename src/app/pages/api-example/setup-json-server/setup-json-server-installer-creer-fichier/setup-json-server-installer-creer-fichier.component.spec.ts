import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJsonServerInstallerCreerFichierComponent } from './setup-json-server-installer-creer-fichier.component';

describe('SetupJsonServerInstallerCreerFichierComponent', () => {
  let component: SetupJsonServerInstallerCreerFichierComponent;
  let fixture: ComponentFixture<SetupJsonServerInstallerCreerFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupJsonServerInstallerCreerFichierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupJsonServerInstallerCreerFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
