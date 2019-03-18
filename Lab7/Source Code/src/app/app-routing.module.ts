import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddCustComponent} from './add-cust/add-cust.component';
import { RemoveCustComponent} from './remove-cust/remove-cust.component';
import { UpdateCustComponent} from './update-cust/update-cust.component';
import { ViewCustComponent} from './view-cust/view-cust.component';

const routes: Routes = [

  {
    path: '', component: AddCustComponent
  },
  {
    path: 'UpdateCust', component: UpdateCustComponent
  },
  {
    path: 'RemoveCust', component: RemoveCustComponent
  },
  {
    path: 'ViewCust', component: ViewCustComponent
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
