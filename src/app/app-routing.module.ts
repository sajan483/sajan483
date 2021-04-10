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
  },
  {
    path: "superagent",
    loadChildren: () =>
      import("./modules/super-agent/super-agent.module").then((m) => m.SuperAgentModule),
  },
  {
    path: "branch",
    loadChildren: () =>
      import("./modules/branch/branch.module").then((m) => m.BranchModule),
  }     
];

@NgModule({
  imports: [RouterModule.forRoot(myPath)],
  exports: [RouterModule],
})

export class AppRoutingModule {}