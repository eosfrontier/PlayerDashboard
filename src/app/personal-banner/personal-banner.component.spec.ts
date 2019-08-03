import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBannerComponent } from './personal-banner.component';

describe('PersonalBannerComponent', () => {
  let component: PersonalBannerComponent;
  let fixture: ComponentFixture<PersonalBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
