import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytogetherComponent } from './mytogether.component';

describe('MytogetherComponent', () => {
  let component: MytogetherComponent;
  let fixture: ComponentFixture<MytogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
