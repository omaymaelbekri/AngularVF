import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorantComponent } from './restorant.component';

describe('RestorantComponent', () => {
  let component: RestorantComponent;
  let fixture: ComponentFixture<RestorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestorantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
