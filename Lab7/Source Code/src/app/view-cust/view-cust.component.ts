import { Component, OnInit } from '@angular/core';
import { CustServiceService} from '../cust-service.service';
import { Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Router} from '@angular/router';

@Component({
  selector: 'app-view-cust',
  templateUrl: './view-cust.component.html',
  styleUrls: ['./view-cust.component.css']
})
export class ViewCustComponent implements OnInit {

  customers: any;

  constructor(private  CustService: CustServiceService, private router: Router) {
  }

  ngOnInit() {
    this.CustService.viewCust().subscribe(data => {
      this.customers = data;
      console.log(this.customers);
    });
  }
  removeCustomer(id) {
    this.customers = this.customers.filter(function f(obj) {
      return obj._id !== id ;
    });
    this.CustService.removeCustomer(id).subscribe(data => {
      console.log(data);
    });
  }
  editCustomer(id) {
    this.router.navigate(['/updatecust', id]);
  }
}




