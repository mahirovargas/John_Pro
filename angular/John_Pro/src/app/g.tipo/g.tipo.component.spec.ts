import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GTipoComponent } from './g.tipo.component';

describe('GTipoComponent', () => {
  let component: GTipoComponent;
  let fixture: ComponentFixture<GTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
