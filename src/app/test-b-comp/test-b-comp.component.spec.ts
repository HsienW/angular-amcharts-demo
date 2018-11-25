import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBCompComponent } from './test-b-comp.component';

describe('TestBCompComponent', () => {
  let component: TestBCompComponent;
  let fixture: ComponentFixture<TestBCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
