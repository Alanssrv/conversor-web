import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedConverterComponent } from './speed-converter.component';

describe('SpeedConverterComponent', () => {
  let component: SpeedConverterComponent;
  let fixture: ComponentFixture<SpeedConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
