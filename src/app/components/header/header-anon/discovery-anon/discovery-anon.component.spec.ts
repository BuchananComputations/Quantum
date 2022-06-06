import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryAnonComponent } from './discovery-anon.component';

describe('DiscoveryAnonComponent', () => {
  let component: DiscoveryAnonComponent;
  let fixture: ComponentFixture<DiscoveryAnonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryAnonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
