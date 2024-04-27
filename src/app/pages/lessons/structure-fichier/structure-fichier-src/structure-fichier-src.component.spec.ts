import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierSrcComponent } from './structure-fichier-src.component';

describe('StructureFichierSrcComponent', () => {
  let component: StructureFichierSrcComponent;
  let fixture: ComponentFixture<StructureFichierSrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierSrcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierSrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
