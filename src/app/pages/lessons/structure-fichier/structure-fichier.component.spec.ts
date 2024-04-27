import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierComponent } from './structure-fichier.component';

describe('StructureFichierComponent', () => {
  let component: StructureFichierComponent;
  let fixture: ComponentFixture<StructureFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
