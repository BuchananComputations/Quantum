import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnonComponent } from './header-anon.component';

describe('HeaderAnonComponent', () => {
  let component: HeaderAnonComponent;
  let fixture: ComponentFixture<HeaderAnonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAnonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
