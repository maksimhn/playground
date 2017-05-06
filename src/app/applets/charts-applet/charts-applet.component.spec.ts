import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAppletComponent } from './charts-applet.component';

describe('ChartsAppletComponent', () => {
  let component: ChartsAppletComponent;
  let fixture: ComponentFixture<ChartsAppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsAppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsAppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
