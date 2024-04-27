import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCreerComponentComponent } from './setup-creer-component.component';

describe('SetupCreerComponentComponent', () => {
  let component: SetupCreerComponentComponent;
  let fixture: ComponentFixture<SetupCreerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupCreerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupCreerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
