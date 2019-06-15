import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebworkersComponent } from './webworkers.component';

describe('WebworkersComponent', () => {
  let component: WebworkersComponent;
  let fixture: ComponentFixture<WebworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
