import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonEvenementParentheseComponent } from './liaison-evenement-parenthese.component';

describe('LiaisonEvenementParentheseComponent', () => {
  let component: LiaisonEvenementParentheseComponent;
  let fixture: ComponentFixture<LiaisonEvenementParentheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiaisonEvenementParentheseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiaisonEvenementParentheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
