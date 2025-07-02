import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActiviteComponent } from './update-activite.component';

describe('UpdateActiviteComponent', () => {
  let component: UpdateActiviteComponent;
  let fixture: ComponentFixture<UpdateActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateActiviteComponent]
    });
    fixture = TestBed.createComponent(UpdateActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
