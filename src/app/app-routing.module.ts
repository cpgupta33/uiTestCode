import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { BrandsComponent } from './brands/brands.component';
import { SubbrandsComponent } from './subbrands/subbrands.component';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicinedescriptionComponent } from './medicinedescription/medicinedescription.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'symptoms',
    component: SymptomsComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'subbrands/:brand',
    component: SubbrandsComponent
  },
  {
    path: 'medicines/:subBrand',
    component: MedicinesComponent
  },
  {
    path: 'medicineDescription/:medicineID',
    component: MedicinedescriptionComponent
  },
  {
    path: 'subCategory',
    component: SubCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
