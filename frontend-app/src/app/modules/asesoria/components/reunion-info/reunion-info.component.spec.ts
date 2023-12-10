import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionInfoComponent } from './reunion-info.component';

describe('ReunionInfoComponent', () => {
  let component: ReunionInfoComponent;
  let fixture: ComponentFixture<ReunionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReunionInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReunionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
