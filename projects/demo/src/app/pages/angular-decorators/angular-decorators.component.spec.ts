import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDecoratorsComponent } from './angular-decorators.component';

describe('AngularDecoratorsComponent', () => {
  let component: AngularDecoratorsComponent;
  let fixture: ComponentFixture<AngularDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
