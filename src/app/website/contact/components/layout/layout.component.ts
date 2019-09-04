import { Component, OnInit, OnDestroy } from '@angular/core';

import { GeneratorService } from './../../../../core/services/generator.service';
import { EmployeeData } from './../../../../core/models/employee.model';
import { Observable, Subscription } from 'rxjs';

const names = ['nicolas', 'juan', 'felipe', 'maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];

  value: number;

  sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);

    this.sub$ = this.generatorService.getData()
    .subscribe(value => {
      this.value = value;
      console.log(this.value);
    });
  }

  ngOnDestroy() {
    console.log('destroy');
    this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }

}
