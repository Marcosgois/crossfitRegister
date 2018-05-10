
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkDashboardComponent } from './benchmark-dashboard.component';

describe('BenchmarkDashboardComponent', () => {
  let component: BenchmarkDashboardComponent;
  let fixture: ComponentFixture<BenchmarkDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
