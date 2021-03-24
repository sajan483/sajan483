import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from './test/test.component';

const myPath: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "test",component: TestComponent
   },
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
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(myPath)],
  exports: [RouterModule],
})

export class AppRoutingModule {}