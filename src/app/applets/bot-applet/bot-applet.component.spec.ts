import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAppletComponent } from './bot-applet.component';

describe('BotAppletComponent', () => {
  let component: BotAppletComponent;
  let fixture: ComponentFixture<BotAppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotAppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotAppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
