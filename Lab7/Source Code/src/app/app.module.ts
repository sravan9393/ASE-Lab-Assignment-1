import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddCustComponent } from './add-cust/add-cust.component';
import { RemoveCustComponent } from './remove-cust/remove-cust.component';
import { UpdateCustComponent } from './update-cust/update-cust.component';
import { ViewCustComponent } from './view-cust/view-cust.component';
import { AppRoutingModule } from './app-routing.module';
import { CustServiceService} from './cust-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCustComponent,
    RemoveCustComponent,
    UpdateCustComponent,
    ViewCustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
