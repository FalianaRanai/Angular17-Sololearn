import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierInterfaceComponent } from './structure-fichier-interface.component';

describe('StructureFichierInterfaceComponent', () => {
  let component: StructureFichierInterfaceComponent;
  let fixture: ComponentFixture<StructureFichierInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
