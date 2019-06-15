import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsDecoratorsComponent } from './ts-decorators.component';

describe('TsDecoratorsComponent', () => {
  let component: TsDecoratorsComponent;
  let fixture: ComponentFixture<TsDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
