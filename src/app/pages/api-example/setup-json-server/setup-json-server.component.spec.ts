import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJsonServerComponent } from './setup-json-server.component';

describe('SetupJsonServerComponent', () => {
  let component: SetupJsonServerComponent;
  let fixture: ComponentFixture<SetupJsonServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupJsonServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupJsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
