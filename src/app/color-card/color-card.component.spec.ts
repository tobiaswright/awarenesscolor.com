import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCardComponent } from './color-card.component';

describe('ColorCardComponent', () => {
  let component: ColorCardComponent;
  let fixture: ComponentFixture<ColorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
