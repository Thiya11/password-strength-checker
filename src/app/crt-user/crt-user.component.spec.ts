import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtUserComponent } from './crt-user.component';

describe('CrtUserComponent', () => {
  let component: CrtUserComponent;
  let fixture: ComponentFixture<CrtUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
