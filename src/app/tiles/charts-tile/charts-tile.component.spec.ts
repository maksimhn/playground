import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsTileComponent } from './charts-tile.component';

describe('ChartsTileComponent', () => {
  let component: ChartsTileComponent;
  let fixture: ComponentFixture<ChartsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
