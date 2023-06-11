import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVidsComponent } from './youtube-vids.component';

describe('YoutubeVidsComponent', () => {
  let component: YoutubeVidsComponent;
  let fixture: ComponentFixture<YoutubeVidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeVidsComponent]
    });
    fixture = TestBed.createComponent(YoutubeVidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
