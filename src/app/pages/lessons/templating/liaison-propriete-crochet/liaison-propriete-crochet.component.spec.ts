import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonProprieteCrochetComponent } from './liaison-propriete-crochet.component';

describe('LiaisonProprieteCrochetComponent', () => {
  let component: LiaisonProprieteCrochetComponent;
  let fixture: ComponentFixture<LiaisonProprieteCrochetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiaisonProprieteCrochetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiaisonProprieteCrochetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
