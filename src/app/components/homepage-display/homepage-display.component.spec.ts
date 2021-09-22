import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDisplayComponent } from './homepage-display.component';

describe('HomepageDisplayComponent', () => {
  let component: HomepageDisplayComponent;
  let fixture: ComponentFixture<HomepageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
