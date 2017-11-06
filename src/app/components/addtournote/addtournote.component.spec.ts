import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtournoteComponent } from './addtournote.component';

describe('AddtournoteComponent', () => {
  let component: AddtournoteComponent;
  let fixture: ComponentFixture<AddtournoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtournoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtournoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
