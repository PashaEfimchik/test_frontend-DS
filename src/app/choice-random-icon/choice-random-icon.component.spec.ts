import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceRandomIconComponent } from './choice-random-icon.component';

describe('ChoiceRandomIconComponent', () => {
  let component: ChoiceRandomIconComponent;
  let fixture: ComponentFixture<ChoiceRandomIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceRandomIconComponent]
    });
    fixture = TestBed.createComponent(ChoiceRandomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
