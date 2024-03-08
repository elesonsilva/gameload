import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarioWorldComponent } from './super-mario-world.component';

describe('SuperMarioWorldComponent', () => {
  let component: SuperMarioWorldComponent;
  let fixture: ComponentFixture<SuperMarioWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperMarioWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperMarioWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
