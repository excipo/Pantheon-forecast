import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActualForecast } from '../actual-forecast.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }


  getActualForecast(): Observable<ActualForecast> {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262";
    url += "&hourly=relativehumidity_2m&hourly=temperature_2m&hourly=surface_pressure&hourly=weathercode";
    return this.http.get<ActualForecast>(url);
  }

  getLastWeeksDate():string  {
    const now = new Date();
    const lastdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    let weekDate = `${lastdate.getFullYear()}-`;
    weekDate += (lastdate.getMonth() + 1) < 10 ? `0${lastdate.getMonth() + 1}-` : `${lastdate.getMonth() + 1}-`;
    weekDate += lastdate.getDate() < 10 ? `0${lastdate.getDate()}` : lastdate.getDate().toString();
    return (weekDate)
  }


  getSecondLastWeeksDate(): string {
    const now = new Date();
    const lastdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 14);
    let weekDate = `${lastdate.getFullYear()}-`;
    weekDate += (lastdate.getMonth() + 1) < 10 ? `0${lastdate.getMonth() + 1}-` : `${lastdate.getMonth() + 1}-`;
    weekDate += lastdate.getDate() < 10 ? `0${lastdate.getDate()}` : lastdate.getDate().toString();
    return (weekDate)
  }

  getHistoricalForecast(): Observable<ActualForecast> {
    let url = "https://archive-api.open-meteo.com/v1/era5?latitude=51.5002&longitude=-0.1262&start_date=";
    url += this.getSecondLastWeeksDate();
    url += "&end_date=";
    url += this.getLastWeeksDate();
    url += "&hourly=temperature_2m&hourly=surface_pressure&hourly=rain&hourly=relativehumidity_2m"
    return this.http.get<ActualForecast>(url);
  }

}
