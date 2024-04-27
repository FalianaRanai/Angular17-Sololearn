import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierServicesComponent } from './structure-fichier-services.component';

describe('StructureFichierServicesComponent', () => {
  let component: StructureFichierServicesComponent;
  let fixture: ComponentFixture<StructureFichierServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
