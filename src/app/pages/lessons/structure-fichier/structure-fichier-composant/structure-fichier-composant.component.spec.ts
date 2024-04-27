import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierComposantComponent } from './structure-fichier-composant.component';

describe('StructureFichierComposantComponent', () => {
  let component: StructureFichierComposantComponent;
  let fixture: ComponentFixture<StructureFichierComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierComposantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
