import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRetrieverComponent } from './data-retriever.component';

describe('DataRetrieverComponent', () => {
  let component: DataRetrieverComponent;
  let fixture: ComponentFixture<DataRetrieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRetrieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRetrieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
