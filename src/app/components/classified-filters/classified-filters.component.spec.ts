import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedFiltersComponent } from './classified-filters.component';

describe('ClassifiedFiltersComponent', () => {
  let component: ClassifiedFiltersComponent;
  let fixture: ComponentFixture<ClassifiedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassifiedFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
