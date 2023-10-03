import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApplyComponent } from './new-apply.component';

describe('NewApplyComponent', () => {
  let component: NewApplyComponent;
  let fixture: ComponentFixture<NewApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
