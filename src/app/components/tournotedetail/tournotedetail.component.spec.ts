import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournotedetailComponent } from './tournotedetail.component';

describe('TournotedetailComponent', () => {
  let component: TournotedetailComponent;
  let fixture: ComponentFixture<TournotedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournotedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournotedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
