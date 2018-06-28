import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/map'

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }

  addCoin(name, price) {
      const uri = 'http://localhost:4000/coins/add';
      const obj = {
        name,
        price
      };
      this.http.post(uri, obj)
          .subscribe(res => console.log('Done'), err => console.log({err}));
    }
    getCoins() {
    const uri = 'http://localhost:4000/coins';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
