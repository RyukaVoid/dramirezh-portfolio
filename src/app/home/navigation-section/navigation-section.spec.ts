import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSection } from './navigation-section';

describe('NavigationSection', () => {
  let component: NavigationSection;
  let fixture: ComponentFixture<NavigationSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
