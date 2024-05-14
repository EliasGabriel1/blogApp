import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponente01Component } from './teste-componente01.component';

describe('TesteComponente01Component', () => {
  let component: TesteComponente01Component;
  let fixture: ComponentFixture<TesteComponente01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteComponente01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteComponente01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
