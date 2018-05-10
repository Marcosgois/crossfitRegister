import { Component } from '@angular/core';

@Component({
  selector: 'benchmark-dashboard',
  templateUrl: './benchmark-dashboard.component.html',
  styleUrls: ['./benchmark-dashboard.component.css']
})
export class BenchmarkDashboardComponent {
  cards = [
    { title: 'Angie', cols: 2, rows: 1 },
    { title: 'Barbara', cols: 1, rows: 2 },
    { title: 'Chelsea', cols: 1, rows: 1 },
    { title: 'Cindy', cols: 1, rows: 1 }
  ];
}
