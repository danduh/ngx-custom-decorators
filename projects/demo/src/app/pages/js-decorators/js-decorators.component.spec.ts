import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDecoratorsComponent } from './js-decorators.component';

describe('JsDecoratorsComponent', () => {
  let component: JsDecoratorsComponent;
  let fixture: ComponentFixture<JsDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
