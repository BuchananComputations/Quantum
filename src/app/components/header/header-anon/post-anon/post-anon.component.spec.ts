import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnonComponent } from './post-anon.component';

describe('PostAnonComponent', () => {
  let component: PostAnonComponent;
  let fixture: ComponentFixture<PostAnonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAnonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
