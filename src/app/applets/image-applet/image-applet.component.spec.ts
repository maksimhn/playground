import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAppletComponent } from './image-applet.component';

describe('ImageAppletComponent', () => {
  let component: ImageAppletComponent;
  let fixture: ComponentFixture<ImageAppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
