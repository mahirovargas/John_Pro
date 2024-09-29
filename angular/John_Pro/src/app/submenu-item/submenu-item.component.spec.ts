import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuItemComponent } from './submenu-item.component';

describe('SubmenuItemComponent', () => {
  let component: SubmenuItemComponent;
  let fixture: ComponentFixture<SubmenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
