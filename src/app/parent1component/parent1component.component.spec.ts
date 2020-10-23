import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1componentComponent } from './parent1component.component';

describe('Parent1componentComponent', () => {
  let component: Parent1componentComponent;
  let fixture: ComponentFixture<Parent1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent1componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
