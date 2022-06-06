import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAnonComponent } from './feed-anon.component';

describe('FeedAnonComponent', () => {
  let component: FeedAnonComponent;
  let fixture: ComponentFixture<FeedAnonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedAnonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
