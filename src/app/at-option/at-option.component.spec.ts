import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOptionComponent } from './at-option.component';

describe('AtOptionComponent', () => {
  let component: AtOptionComponent;
  let fixture: ComponentFixture<AtOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
