import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomersService } from "../_services/customers.service";
import { OrdersService } from "../_services/orders.service";

@Component({
  selector: "app-custumer-details",
  templateUrl: "./custumer-details.component.html",
  styleUrls: ["./custumer-details.component.css"]
})
export class CustumerDetailsComponent implements OnInit {
  customer;
  isClicked = false;
  constructor(
    private route: ActivatedRoute,
    private customerservice: CustomersService,
    private orderservice: OrdersService
  ) {}

  ngOnInit() {
    this.getCustomerDetails();
  }

  showOrder(id) {
    this.isClicked = !this.isClicked;
    this.orderservice.setOrderData(id);
  }

  getCustomerDetails() {
    const id = +this.route.snapshot.paramMap.get("id");

    this.customerservice.getCustomer(id).subscribe(res => {
      this.customer = res;
    });
  }
}
