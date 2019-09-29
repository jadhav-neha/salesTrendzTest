import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomersService {
  customers = [
    { id: 1, name: "Conor McGregor", address: 21, contact: 3 },
    { id: 2, name: "Tony Ferguson", address: 23, contact: 3 },
    { id: 3, name: "Max Holloway", address: 19, contact: 3 },
    { id: 4, name: "Jon Jones", address: 22, contact: 1 },
    { id: 5, name: "Daniel Cormier", address: 21, contact: 1 },
    { id: 6, name: "Brock Lesnar", address: 5, contact: 3 }
  ];

  constructor() {}

  get() {
    return of(this.customers);
  }

  addCutomer(data) {
    this.customers.push(data);
  }

  getCustomer(id) {
    return of(this.customers.find(item => item.id === id));
  }
}
