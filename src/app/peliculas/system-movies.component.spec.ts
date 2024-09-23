import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMoviesComponent } from './system-movies.component';

describe('SystemMoviesComponent', () => {
  let component: SystemMoviesComponent;
  let fixture: ComponentFixture<SystemMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
