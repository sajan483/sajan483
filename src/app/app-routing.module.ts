import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const myPath: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "",
    loadChildren: () =>
      import("./modules/landing/landing.module").then((m) => m.LandingModule),
  },
  {
    path: "subagent",
    loadChildren: () =>
      import("./modules/sub-agent/sub-agent.module").then((m) => m.SubAgentModule),
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(myPath)],
  exports: [RouterModule],
})

export class AppRoutingModule {}