import { Component, OnInit } from '@angular/core';
import { ActualForecast } from '../core/actual-forecast.model';
import { ForecastService } from '../core/forecast-service/forecast.service';
import { GrahpData } from '../core/grap-data.model';
@Component({
	selector: 'app-graph',
	templateUrl: './graph.component.html',
	styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {
	actualData?: ActualForecast;
	graphData?: GrahpData[];
	view: any[] = [700, 300];

	// options
	legend: boolean = true;
	showLabels: boolean = true;
	animations: boolean = true;
	xAxis: boolean = true;
	yAxis: boolean = true;
	showYAxisLabel: boolean = true;
	showXAxisLabel: boolean = true;
	timeline: boolean = true;

	colorScheme = {
		domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
	};
	constructor(private forecastService: ForecastService) {
	}

	ngOnInit(): void {
		this.forecastService.getActualForecast().subscribe(data => {
			this.graphData = this.initializeGraphData();
			for (let i = 0; i < data.hourly.time.length; i++) {
				this.graphData[0].series.push({
					name: data.hourly.time[i],
					value: data.hourly.temperature_2m[i].toString()
				});
			}
			console.log(JSON.stringify(this.graphData));
		})
	}

	initializeGraphData(): GrahpData[] {
		return [
			{
				name: "London",
				series: []
			}
		];
	}
}
