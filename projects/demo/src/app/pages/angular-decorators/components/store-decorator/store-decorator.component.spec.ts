import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDecoratorComponent } from './store-decorator.component';

describe('StoreDecoratorComponent', () => {
  let component: StoreDecoratorComponent;
  let fixture: ComponentFixture<StoreDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
