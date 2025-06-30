import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportProjetsComponent } from './rapport-projets.component';

describe('RapportProjetsComponent', () => {
  let component: RapportProjetsComponent;
  let fixture: ComponentFixture<RapportProjetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RapportProjetsComponent]
    });
    fixture = TestBed.createComponent(RapportProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
