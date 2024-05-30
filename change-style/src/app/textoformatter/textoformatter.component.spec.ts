import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoformatterComponent } from './textoformatter.component';

describe('TextoformatterComponent', () => {
  let component: TextoformatterComponent;
  let fixture: ComponentFixture<TextoformatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextoformatterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoformatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
