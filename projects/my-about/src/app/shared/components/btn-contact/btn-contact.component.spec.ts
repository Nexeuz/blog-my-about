import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContactComponent } from './btn-contact.component';

describe('BtnContactComponent', () => {
  let component: BtnContactComponent;
  let fixture: ComponentFixture<BtnContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
