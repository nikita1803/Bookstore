import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadDisplayComponent } from './sub-head-display.component';

describe('SubHeadDisplayComponent', () => {
  let component: SubHeadDisplayComponent;
  let fixture: ComponentFixture<SubHeadDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeadDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
