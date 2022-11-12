import { Component, OnInit } from '@angular/core';
interface Type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-heat-index',
  templateUrl: './heat-index.component.html',
  styleUrls: ['./heat-index.component.scss']
})
export class HeatIndexComponent implements OnInit {
  displayedColumns: string[] = ['results'];
  resultType?: string;
  result?: number;
  selectedValue: string = "1";
  errorMessage?: string
  storedItems?: any[]
  types: Type[] = [
    { value: '1', viewValue: 'Celsius' },
    { value: '2', viewValue: 'Fahrenheit' },
  ];
  constructor() { }

  ngOnInit(): void {
    this.getStoredItem();
  }

  calculateHeatIndex(temperature: string, humidity: string, type: string) {
    if (temperature && humidity) {
      var T = type === "1" ? Number(temperature) * 9 / 5 + 32 : Number(temperature);
      if (T > 80) {
        this.errorMessage = "";
        this.resultType = type;
        var H = Number(humidity);
        this.result = -42.379 + (2.04901523 * T) + (10.14333127 * H) - (0.22475541 * T * H) -
          (6.83783 * 0.001 * T * T) - (5.481717 * 0.01 * H * H) + (1.22874 * 0.001 * T * T * H) + (8.5282 * 0.0001 * T * H * H) - (1.99 * 0.000001 * T * T * H * H);
        if (type === "1") {
          this.result = (this.result - 32) * 5 / 9;
        }
        this.result = Number(this.result.toFixed(2));
        this.storeItemToLocalStorage(`${this.result} ${this.types.find(t => t.value === type)?.viewValue}`);
      }
      else {
        this.errorMessage = "Temperature must be higher than 80°F or 26.7°C"
      }
    }
  }

  storeItemToLocalStorage(item: string) {
    var pole = localStorage.getItem("token");
    if (pole) {
      var array = JSON.parse(pole);
      if (array.length >= 5) {
        array.shift();
      };
      array.push(item);
      console.log(array);
      localStorage.setItem("token", JSON.stringify(array));
    }
    else {
      localStorage.setItem("token", `["${item}"]`);
    }
    this.getStoredItem()
  }
  getStoredItem() {
    var pole = localStorage.getItem("token")
    if (pole) {
      this.storedItems = JSON.parse(pole);
    }
  }
}
