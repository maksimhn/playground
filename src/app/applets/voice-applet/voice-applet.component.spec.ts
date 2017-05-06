import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceAppletComponent } from './voice-applet.component';

describe('VoiceAppletComponent', () => {
  let component: VoiceAppletComponent;
  let fixture: ComponentFixture<VoiceAppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceAppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceAppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
