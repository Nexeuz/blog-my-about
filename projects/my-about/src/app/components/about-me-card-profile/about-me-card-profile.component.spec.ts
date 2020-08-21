import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeCardProfileComponent } from './about-me-card-profile.component';

describe('AboutMeCardProfileComponent', () => {
  let component: AboutMeCardProfileComponent;
  let fixture: ComponentFixture<AboutMeCardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeCardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeCardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
