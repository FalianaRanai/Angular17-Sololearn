import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMiseEnPlaceRoutingComponent } from './setup-mise-en-place-routing.component';

describe('SetupMiseEnPlaceRoutingComponent', () => {
  let component: SetupMiseEnPlaceRoutingComponent;
  let fixture: ComponentFixture<SetupMiseEnPlaceRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupMiseEnPlaceRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupMiseEnPlaceRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
