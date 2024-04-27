import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFichierAppComponent } from './structure-fichier-app.component';

describe('StructureFichierAppComponent', () => {
  let component: StructureFichierAppComponent;
  let fixture: ComponentFixture<StructureFichierAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureFichierAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureFichierAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
