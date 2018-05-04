import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-table-benchmarks',
  templateUrl: './table-benchmarks.component.html',
  styleUrls: ['./table-benchmarks.component.css']
})
export class TableBenchmarksComponent implements OnInit {
  public benchmarks: Observable<any[]>;

  constructor(db: AngularFirestore) {
      this.benchmarks = db.collection('/benchmarks').valueChanges();
  }

  ngOnInit() {
  }

}
