import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAppletComponent } from './player-applet.component';

describe('PlayerAppletComponent', () => {
  let component: PlayerAppletComponent;
  let fixture: ComponentFixture<PlayerAppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
