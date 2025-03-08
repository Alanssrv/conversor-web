import { Component } from '@angular/core';
import { SpeedConverterComponent } from '../converters/speed-converter/speed-converter.component';

@Component({
  selector: 'app-home',
  imports: [SpeedConverterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
