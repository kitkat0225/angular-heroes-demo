import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeParentComponent } from './size-parent.component';

describe('SizeParentComponent', () => {
  let component: SizeParentComponent;
  let fixture: ComponentFixture<SizeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
