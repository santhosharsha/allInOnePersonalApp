import { Routes } from '@angular/router';
import { TestComponent } from "./expense/test.component";
import { ListComponent} from './expense/list.component';
import { CreateEditComponent } from "./expense/create-edit.component"

export const appRoutes: Routes = [
  { path: 'expense/test', 
    component: TestComponent 
  },
  {
    path:"expense/create-edit",
    component:CreateEditComponent
  },
  // {
  //   path: 'expense/edit/:id',
  //   component: EditComponent
  // },
  { path: 'list',
    component: ListComponent
  }
];