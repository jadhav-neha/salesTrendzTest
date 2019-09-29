import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../_services/orders.service";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.css"]
})
export class OrderDetailsComponent implements OnInit {
  orderdata;
  constructor(private orderservice: OrdersService) {}

  ngOnInit() {
    this.orderservice.getOrderData().subscribe(res => {
      this.orderdata = res;
    });
  }
}
