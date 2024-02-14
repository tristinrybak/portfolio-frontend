import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceModalComponent } from './reference-modal.component';

describe('ReferenceModalComponent', () => {
  let component: ReferenceModalComponent;
  let fixture: ComponentFixture<ReferenceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
