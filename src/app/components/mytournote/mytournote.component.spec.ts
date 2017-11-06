import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytournoteComponent } from './mytournote.component';

describe('MytournoteComponent', () => {
  let component: MytournoteComponent;
  let fixture: ComponentFixture<MytournoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytournoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytournoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
