import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCustComponent } from './remove-cust.component';

describe('RemoveCustComponent', () => {
  let component: RemoveCustComponent;
  let fixture: ComponentFixture<RemoveCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
