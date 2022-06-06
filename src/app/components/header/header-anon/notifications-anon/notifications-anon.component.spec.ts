import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsAnonComponent } from './notifications-anon.component';

describe('NotificationsAnonComponent', () => {
  let component: NotificationsAnonComponent;
  let fixture: ComponentFixture<NotificationsAnonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsAnonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
