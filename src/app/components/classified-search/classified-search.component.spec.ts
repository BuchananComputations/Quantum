import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedSearchComponent } from './classified-search.component';

describe('ClassifiedSearchComponent', () => {
  let component: ClassifiedSearchComponent;
  let fixture: ComponentFixture<ClassifiedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassifiedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
