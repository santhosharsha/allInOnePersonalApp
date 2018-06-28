import { Component, OnInit } from '@angular/core';
import { ExpenseService } from "../service/expense.service";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
  categoriesDetails:any;
  expenseDate: NgbDateStruct;
  maxDate: {year: number, month: number};
  expenseDateObj: {year: number, month: number};
  categoriesDetailsObj:any;
  constructor(private expenseService:ExpenseService) { 
    this.getCategories()
  }

  ngOnInit() {
    var date = new Date();
    this.maxDate = this.expenseDate = {day:date.getDate(),year:date.getFullYear(),month:date.getMonth()+1};
  }

  getCategories(){
    // console.log(this.expenseService.getCategories())
    this.expenseService.getCategories().subscribe(res => {
    this.categoriesDetails = res;
  });
    // this.categoriesDetails = this.expenseService.getCategories();
  }
}
