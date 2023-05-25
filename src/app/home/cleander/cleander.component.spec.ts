import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanderComponent } from './cleander.component';

describe('CleanderComponent', () => {
  let component: CleanderComponent;
  let fixture: ComponentFixture<CleanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
