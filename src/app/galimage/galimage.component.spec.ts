import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalimageComponent } from './galimage.component';

describe('GalimageComponent', () => {
  let component: GalimageComponent;
  let fixture: ComponentFixture<GalimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
