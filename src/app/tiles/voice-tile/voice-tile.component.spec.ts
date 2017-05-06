import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTileComponent } from './voice-tile.component';

describe('VoiceTileComponent', () => {
  let component: VoiceTileComponent;
  let fixture: ComponentFixture<VoiceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
