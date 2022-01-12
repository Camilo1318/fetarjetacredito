import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatjetaCreditoFormComponent } from './tatjeta-credito-form.component';

describe('TatjetaCreditoFormComponent', () => {
  let component: TatjetaCreditoFormComponent;
  let fixture: ComponentFixture<TatjetaCreditoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatjetaCreditoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TatjetaCreditoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
