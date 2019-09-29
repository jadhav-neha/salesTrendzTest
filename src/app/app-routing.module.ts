import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustumerListComponent } from "./custumer-list/custumer-list.component";
import { CustumerDetailsComponent } from "./custumer-details/custumer-details.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "customerlist",
    component: CustumerListComponent
  },
  { path: "customer/:id", component: CustumerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
