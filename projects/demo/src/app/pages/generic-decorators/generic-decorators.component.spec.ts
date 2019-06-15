import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDecoratorsComponent } from './generic-decorators.component';

describe('GenericDecoratorsComponent', () => {
  let component: GenericDecoratorsComponent;
  let fixture: ComponentFixture<GenericDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
