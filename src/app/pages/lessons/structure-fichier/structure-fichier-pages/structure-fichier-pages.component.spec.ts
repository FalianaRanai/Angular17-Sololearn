import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierPagesComponent } from './structure-fichier-pages.component';

describe('StructureFichierPagesComponent', () => {
  let component: StructureFichierPagesComponent;
  let fixture: ComponentFixture<StructureFichierPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
