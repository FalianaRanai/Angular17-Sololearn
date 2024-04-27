import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierRoutesComponent } from './structure-fichier-routes.component';

describe('StructureFichierRoutesComponent', () => {
  let component: StructureFichierRoutesComponent;
  let fixture: ComponentFixture<StructureFichierRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
