import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TestComponent } from './expense/test.component';
import { ListComponent } from './expense/list.component';
import { appRoutes } from "./app.route.config";
import { CoinService } from './coin.service';
import { CreateEditComponent } from './expense/create-edit.component';
import { ExpenseService } from "./service/expense.service";
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TestComponent,
    ListComponent,
    CreateEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CoinService,ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
