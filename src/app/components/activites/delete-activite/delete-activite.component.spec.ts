import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActiviteComponent } from './delete-activite.component';

describe('DeleteActiviteComponent', () => {
  let component: DeleteActiviteComponent;
  let fixture: ComponentFixture<DeleteActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteActiviteComponent]
    });
    fixture = TestBed.createComponent(DeleteActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
