import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnercomponentComponent } from './innercomponent.component';

describe('InnercomponentComponent', () => {
  let component: InnercomponentComponent;
  let fixture: ComponentFixture<InnercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
