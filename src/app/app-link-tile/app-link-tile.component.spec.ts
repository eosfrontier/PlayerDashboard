import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLinkTileComponent } from './app-link-tile.component';

describe('AppLinkTileComponent', () => {
  let component: AppLinkTileComponent;
  let fixture: ComponentFixture<AppLinkTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLinkTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLinkTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
