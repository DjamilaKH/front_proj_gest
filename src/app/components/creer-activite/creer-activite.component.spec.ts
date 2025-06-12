import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerActiviteComponent } from './creer-activite.component';

describe('CreerActiviteComponent', () => {
  let component: CreerActiviteComponent;
  let fixture: ComponentFixture<CreerActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerActiviteComponent]
    });
    fixture = TestBed.createComponent(CreerActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
