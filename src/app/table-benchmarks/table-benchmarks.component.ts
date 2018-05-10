import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-table-benchmarks',
  templateUrl: './table-benchmarks.component.html',
  styleUrls: ['./table-benchmarks.component.css']
})
export class TableBenchmarksComponent implements OnInit {
  public moviments: Observable<any[]>;

  constructor(db: AngularFirestore) {
      this.moviments = db.collection('/moviments').valueChanges();
  }

  ngOnInit() {
  }

}
