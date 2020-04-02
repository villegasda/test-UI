import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpersonsComponent } from './showpersons.component';

describe('ShowpersonsComponent', () => {
  let component: ShowpersonsComponent;
  let fixture: ComponentFixture<ShowpersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
