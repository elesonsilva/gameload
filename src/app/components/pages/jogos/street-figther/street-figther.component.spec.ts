import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetFigtherComponent } from './street-figther.component';

describe('StreetFigtherComponent', () => {
  let component: StreetFigtherComponent;
  let fixture: ComponentFixture<StreetFigtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreetFigtherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreetFigtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
