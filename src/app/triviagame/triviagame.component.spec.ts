import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviagameComponent } from './triviagame.component';

describe('TriviagameComponent', () => {
  let component: TriviagameComponent;
  let fixture: ComponentFixture<TriviagameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviagameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviagameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
