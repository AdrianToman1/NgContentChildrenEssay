import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOptgroupComponent } from './at-optgroup.component';

describe('AtOptgroupComponent', () => {
  let component: AtOptgroupComponent;
  let fixture: ComponentFixture<AtOptgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtOptgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtOptgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
