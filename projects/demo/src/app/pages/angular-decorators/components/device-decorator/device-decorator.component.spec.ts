import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDecoratorComponent } from './device-decorator.component';

describe('DeviceDecoratorComponent', () => {
  let component: DeviceDecoratorComponent;
  let fixture: ComponentFixture<DeviceDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
