import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'test-edit',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private coinservice: CoinService, private fb: FormBuilder) {
    this.createForm()
  }
  title = 'Add Coin';
  angForm: FormGroup;
  coins:any
  ngOnInit() {
    this.listCoin()
  }
  
  createForm(){
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  
  listCoin(){
    this.coinservice.getCoins().subscribe(res => {
    this.coins = res;
  });
  }
  addCoin(name, price) {
      this.coinservice.addCoin(name, price);
  }
}
