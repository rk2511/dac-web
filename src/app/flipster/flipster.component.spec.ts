import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipsterComponent } from './flipster.component';

describe('FlipsterComponent', () => {
  let component: FlipsterComponent;
  let fixture: ComponentFixture<FlipsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
