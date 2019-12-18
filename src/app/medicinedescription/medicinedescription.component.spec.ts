import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedescriptionComponent } from './medicinedescription.component';

describe('MedicinedescriptionComponent', () => {
  let component: MedicinedescriptionComponent;
  let fixture: ComponentFixture<MedicinedescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinedescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
