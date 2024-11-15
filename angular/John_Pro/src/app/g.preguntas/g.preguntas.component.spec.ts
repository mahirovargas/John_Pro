import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPreguntasComponent } from './g.preguntas.component';

describe('GPreguntasComponent', () => {
  let component: GPreguntasComponent;
  let fixture: ComponentFixture<GPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GPreguntasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
