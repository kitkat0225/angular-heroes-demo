import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeChildComponent } from './size-child.component';

describe('SizeChildComponent', () => {
  let component: SizeChildComponent;
  let fixture: ComponentFixture<SizeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
