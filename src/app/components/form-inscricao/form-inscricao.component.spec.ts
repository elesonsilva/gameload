import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscricaoComponent } from './form-inscricao.component';

describe('FormInscricaoComponent', () => {
  let component: FormInscricaoComponent;
  let fixture: ComponentFixture<FormInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInscricaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
