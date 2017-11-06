import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherhomepageComponent } from './togetherhomepage.component';

describe('TogetherhomepageComponent', () => {
  let component: TogetherhomepageComponent;
  let fixture: ComponentFixture<TogetherhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogetherhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogetherhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
