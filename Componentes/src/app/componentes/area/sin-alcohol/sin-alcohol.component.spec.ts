import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinAlcoholComponent } from './sin-alcohol.component';

describe('SinAlcoholComponent', () => {
  let component: SinAlcoholComponent;
  let fixture: ComponentFixture<SinAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
