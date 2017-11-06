import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfabuComponent } from './myfabu.component';

describe('MyfabuComponent', () => {
  let component: MyfabuComponent;
  let fixture: ComponentFixture<MyfabuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfabuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
