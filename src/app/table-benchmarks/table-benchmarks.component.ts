import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-table-benchmarks',
  templateUrl: './table-benchmarks.component.html',
  styleUrls: ['./table-benchmarks.component.css']
})
export class TableBenchmarksComponent implements OnInit {
  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
      this.items = db.collection('/benchmarks').valueChanges();
      console.log(this.items);
      
  }

  ngOnInit() {
  }

}
