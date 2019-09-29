import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustumerListComponent } from "./custumer-list/custumer-list.component";
import { CustumerDetailsComponent } from "./custumer-details/custumer-details.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CustumerListComponent,
    CustumerDetailsComponent,
    OrderDetailsComponent,
    AddCustomerComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
