import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMemberComponent } from './header-member.component';

describe('HeaderMemberComponent', () => {
  let component: HeaderMemberComponent;
  let fixture: ComponentFixture<HeaderMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
