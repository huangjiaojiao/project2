import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtogetherComponent } from './addtogether.component';

describe('AddtogetherComponent', () => {
  let component: AddtogetherComponent;
  let fixture: ComponentFixture<AddtogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
