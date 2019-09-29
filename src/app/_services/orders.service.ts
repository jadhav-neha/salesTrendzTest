import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  selectedOrder = null;
  orders = [
    { id: 1, orderNo: "123", orderStatus: "sccess" },
    { id: 2, orderNo: "5662", orderStatus: "sucess" },
    { id: 3, orderNo: "85333", orderStatus: "fail" },
    { id: 4, orderNo: "5233", orderStatus: "success" },
    { id: 5, orderNo: "5233", orderStatus: "fail" },
    { id: 6, orderNo: "85666", orderStatus: "success" }
  ];
  constructor() {}

  getOrderDetail(id) {
    return of(this.orders.find(item => item.id === id));
  }
  setOrderData(id) {
    debugger;
    this.selectedOrder = of(this.orders.find(item => item.id === id));
  }
  getOrderData() {
    return this.selectedOrder;
  }
}
