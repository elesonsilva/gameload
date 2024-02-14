import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortalComponent } from './mortal.component';

describe('MortalComponent', () => {
  let component: MortalComponent;
  let fixture: ComponentFixture<MortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
