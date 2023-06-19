import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorylinesComponent } from './storylines.component';

describe('StorylinesComponent', () => {
  let component: StorylinesComponent;
  let fixture: ComponentFixture<StorylinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorylinesComponent]
    });
    fixture = TestBed.createComponent(StorylinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
