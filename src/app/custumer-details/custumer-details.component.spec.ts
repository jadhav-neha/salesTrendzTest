import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerDetailsComponent } from './custumer-details.component';

describe('CustumerDetailsComponent', () => {
  let component: CustumerDetailsComponent;
  let fixture: ComponentFixture<CustumerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustumerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
