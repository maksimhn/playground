import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAppletComponent } from './report-applet.component';

describe('ReportAppletComponent', () => {
  let component: ReportAppletComponent;
  let fixture: ComponentFixture<ReportAppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
