import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPracticesComponent } from './good-practices.component';

describe('GoodPracticesComponent', () => {
  let component: GoodPracticesComponent;
  let fixture: ComponentFixture<GoodPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
