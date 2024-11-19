import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibFleetComponent } from './components/base/lib-fleet.component';

const routes: Routes = [
  {
    path: '',
    component: LibFleetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibFleetRoutingModule {}
