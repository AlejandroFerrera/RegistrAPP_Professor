import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAssistenceComponent } from './section-assistence.component';

describe('SectionAssistenceComponent', () => {
  let component: SectionAssistenceComponent;
  let fixture: ComponentFixture<SectionAssistenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAssistenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAssistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
