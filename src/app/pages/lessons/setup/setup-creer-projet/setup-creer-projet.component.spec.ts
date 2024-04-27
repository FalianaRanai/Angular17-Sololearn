import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCreerProjetComponent } from './setup-creer-projet.component';

describe('SetupCreerProjetComponent', () => {
  let component: SetupCreerProjetComponent;
  let fixture: ComponentFixture<SetupCreerProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupCreerProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupCreerProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
