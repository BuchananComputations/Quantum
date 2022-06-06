import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAnonComponent } from './signup-anon.component';

describe('SignupAnonComponent', () => {
  let component: SignupAnonComponent;
  let fixture: ComponentFixture<SignupAnonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAnonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
