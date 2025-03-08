import { Component, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-speed-converter',
  imports: [],
  templateUrl: './speed-converter.component.html',
  styleUrl: './speed-converter.component.scss'
})
export class SpeedConverterComponent {
  public kilometers = new BehaviorSubject<number>(0);
  public milesperhour = new BehaviorSubject<number>(0);
  public meterspersecond = new BehaviorSubject<number>(0);

  private isUpdating: boolean = false;

  constructor() {
    this.kilometers.subscribe((newValue) => {
      if (!this.isUpdating)
        this.kilometersActionChange(newValue);
    });

    this.milesperhour.subscribe((newValue) => {
      if (!this.isUpdating)
        this.milesperhourActionChange(newValue);
    });

    this.meterspersecond.subscribe((newValue) => {
      if (!this.isUpdating)
        this.meterspersecondActionChange(newValue);
    });
  }

  onInputChange(event: Event): void {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.kilometers.next(newValue);
  }

  onInputChange2(event: Event): void {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.milesperhour.next(newValue);
  }

  onInputChange3(event: Event): void {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.meterspersecond.next(newValue);
  }

  public kilometersActionChange(newValue: number) {
    this.isUpdating = true;
    this.milesperhour.next(Number((newValue * 0.621371).toFixed(4)));
    this.meterspersecond.next(Number((newValue / 3.6).toFixed(4)));
    this.isUpdating = false;
  }

  public milesperhourActionChange(newValue: number) {
    this.isUpdating = true;
    this.kilometers.next(Number((newValue / 1.60934).toFixed(4)));
    this.meterspersecond.next(Number((newValue * 0.44704).toFixed(4)));
    this.isUpdating = false;
  }

  public meterspersecondActionChange(newValue: number) {
    this.isUpdating = true;
    this.kilometers.next(Number((newValue * 3.6).toFixed(4)));
    this.milesperhour.next(Number((newValue / 2.23694).toFixed(4)));
    this.isUpdating = false;
  }
}
