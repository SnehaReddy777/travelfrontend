import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhimupiComponent } from './bhimupi.component';

describe('BhimupiComponent', () => {
  let component: BhimupiComponent;
  let fixture: ComponentFixture<BhimupiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhimupiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhimupiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
