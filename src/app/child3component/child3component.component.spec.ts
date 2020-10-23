import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3componentComponent } from './child3component.component';

describe('Child3componentComponent', () => {
  let component: Child3componentComponent;
  let fixture: ComponentFixture<Child3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child3componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
