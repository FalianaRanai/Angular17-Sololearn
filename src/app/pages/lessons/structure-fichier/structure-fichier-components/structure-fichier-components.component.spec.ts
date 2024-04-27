import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierComponentsComponent } from './structure-fichier-components.component';

describe('StructureFichierComponentsComponent', () => {
  let component: StructureFichierComponentsComponent;
  let fixture: ComponentFixture<StructureFichierComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
