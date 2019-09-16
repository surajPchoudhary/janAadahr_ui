import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenhistoryComponent } from './citizenhistory.component';

describe('CitizenhistoryComponent', () => {
  let component: CitizenhistoryComponent;
  let fixture: ComponentFixture<CitizenhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
