import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlObtainComponent } from './url-obtain.component';

describe('UrlObtainComponent', () => {
  let component: UrlObtainComponent;
  let fixture: ComponentFixture<UrlObtainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlObtainComponent]
    });
    fixture = TestBed.createComponent(UrlObtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
