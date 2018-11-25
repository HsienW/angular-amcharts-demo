import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestACompComponent } from './test-a-comp.component';

describe('TestACompComponent', () => {
  let component: TestACompComponent;
  let fixture: ComponentFixture<TestACompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestACompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestACompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
