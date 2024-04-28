import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierModulesComponent } from './structure-fichier-modules.component';

describe('StructureFichierModulesComponent', () => {
  let component: StructureFichierModulesComponent;
  let fixture: ComponentFixture<StructureFichierModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
