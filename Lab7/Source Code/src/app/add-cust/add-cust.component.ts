import { Component, OnInit } from '@angular/core';
import { CustServiceService} from '../cust-service.service';
import { Router} from '@angular/router';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {
  customerId: number;
  customerName: string;
  customerEmailId: string;
  constructor( private customerService: CustServiceService) { }

  addCust() {
    const data = {
      customerid: this.customerId,
      customername: this.customerName,
      customeremailId: this.customerEmailId
    };

    this.customerService.addCust(data).subscribe(data => {
        window.location.reload();
      });

  }

  ngOnInit() {
  }
  clearValues() {
    this.customerId = null;
    this.customerEmailId = null ;
    this.customerName = null;
  }

}
