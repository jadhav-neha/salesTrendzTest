import { Component, OnInit } from "@angular/core";
import { CustomersService } from "../_services/customers.service";

@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.css"]
})
export class AddCustomerComponent implements OnInit {
  customer;
  constructor(private customerservice: CustomersService) {}

  ngOnInit() {
    this.intialization();
  }

  intialization() {
    this.customer = {
      name: "",
      address: "",
      contact: "",
      id: ""
    };
  }

  saveCustomer() {
    this.customerservice.addCutomer(this.customer);
    console.log(this.customer);
    alert("saved ");
    this.intialization();
  }
}
