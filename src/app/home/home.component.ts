import { Component, OnInit } from '@angular/core';
import { ActualForecast } from '../core/actual-forecast.model';
import { ForecastService } from '../core/forecast-service/forecast.service';
import { weatherCodeConvertor } from '../core/weather-code-convertor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  actualData?: ActualForecast;
  historicalData?: ActualForecast;
  selectedTab: number = 1;


  constructor(private forecastService: ForecastService) {
  }


  ngOnInit(): void {
    this.getActual();
  }

  getActual() {
    this.forecastService.getActualForecast().subscribe(data => {
      this.actualData = data;
      this.selectedTab = 1;
    });
  }

  getHistorical() {
    this.forecastService.getHistoricalForecast().subscribe(data => {
      this.historicalData = data;
      this.selectedTab = 2;
    });
  }

  getWeather(code: number) {
   return weatherCodeConvertor(code);
  }
}
