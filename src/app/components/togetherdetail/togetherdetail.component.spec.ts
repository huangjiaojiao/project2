import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherdetailComponent } from './togetherdetail.component';

describe('TogetherdetailComponent', () => {
  let component: TogetherdetailComponent;
  let fixture: ComponentFixture<TogetherdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogetherdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogetherdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
