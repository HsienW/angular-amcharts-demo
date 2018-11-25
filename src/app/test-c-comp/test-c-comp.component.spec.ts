import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCCompComponent } from './test-c-comp.component';

describe('TestCCompComponent', () => {
  let component: TestCCompComponent;
  let fixture: ComponentFixture<TestCCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
