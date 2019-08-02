import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTileGridComponent } from './link-tile-grid.component';

describe('LinkTileGridComponent', () => {
  let component: LinkTileGridComponent;
  let fixture: ComponentFixture<LinkTileGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTileGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTileGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
