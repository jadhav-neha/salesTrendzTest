import { Component, OnInit } from "@angular/core";
import { CustomersService } from "../_services/customers.service";

@Component({
  selector: "app-custumer-list",
  templateUrl: "./custumer-list.component.html",
  styleUrls: ["./custumer-list.component.css"]
})
export class CustumerListComponent implements OnInit {
  customers: Array<object>;
  isClicked = false;
  constructor(private customerservice: CustomersService) {}

  ngOnInit() {
    this.customerservice.get().subscribe(res => {
      this.customers = res;
    });
  }

  deleteRow(index) {
    this.customers.splice(index, 1);
  }

  AddNewCustomer() {
    this.isClicked = !this.isClicked;
  }
}
