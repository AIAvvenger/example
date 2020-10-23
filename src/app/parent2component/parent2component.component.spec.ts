import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent2componentComponent } from './parent2component.component';

describe('Parent2componentComponent', () => {
  let component: Parent2componentComponent;
  let fixture: ComponentFixture<Parent2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent2componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
