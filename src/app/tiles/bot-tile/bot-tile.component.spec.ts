import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotTileComponent } from './bot-tile.component';

describe('BotTileComponent', () => {
  let component: BotTileComponent;
  let fixture: ComponentFixture<BotTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
