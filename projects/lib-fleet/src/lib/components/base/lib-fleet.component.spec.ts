import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFleetComponent } from './lib-fleet.component';

describe('LibFleetComponent', () => {
  let component: LibFleetComponent;
  let fixture: ComponentFixture<LibFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibFleetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
