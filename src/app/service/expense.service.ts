import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/map'

@Injectable()
export class ExpenseService {

  constructor(private http: HttpClient) { }

    getCategories() {
    const uri = 'http://localhost:4000/categories';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
