import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule , MatCheckboxModule, MatOptionModule, MatSelectModule, MatAutocompleteModule,
  MatListModule, MatCardModule, MatIconModule, MatTabsModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AgeComponent } from './age/age.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { BrandsComponent } from './brands/brands.component';
import { SubbrandsComponent } from './subbrands/subbrands.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SharedService } from './Services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicinedescriptionComponent } from './medicinedescription/medicinedescription.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SubCategoryComponent } from './sub-category/sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AgeComponent,
    SymptomsComponent,
    BrandsComponent,
    SubbrandsComponent,
    MedicinesComponent,
    MedicinedescriptionComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
