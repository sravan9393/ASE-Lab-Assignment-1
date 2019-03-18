import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CustServiceService} from '../cust-service.service';

@Component({
  selector: 'app-update-cust',
  templateUrl: './update-cust.component.html',
  styleUrls: ['./update-cust.component.css']
})
export class UpdateCustComponent implements OnInit {
  id: any;
  customer = null;

  constructor(private customerService: CustServiceService, private route: ActivatedRoute, private router: Router) {
  }

  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params[' id'];
      this.customerService.viewbyidCustomer(this.id).subscribe(data => {
        this.customer = data;
      });
    });
  }

  editcustomer(id) {

    const data = {
      customerId: this.customer.customerid,
      customerName: this.customer.customername,
      customerEmailId: this.customer.customeremailId
    };
    this.customerService.editCustomer(id, data)
      .subscribe( data => {
        this.router.navigate(['']);
      });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
