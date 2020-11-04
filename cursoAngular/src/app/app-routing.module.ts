import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [
  { path: 'primeiro-compoente', component: DataBindingComponent },
  { path: 'teste', component: NgifNgforComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
