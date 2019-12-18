import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  ageGroupUrl = 'http://10.19.1.76:9091/v1/symptom/mapping/getAgeGroup?supplierUniqueRecordId=1';
  subCategory = 'http://10.19.1.76:9091/v1/symptom/mapping/getSubCategories?ageGroup=&category=UPPER%20RESPIRATORY&supplierUniqueRecordId=1'
  symptomsUrl = 'http://10.19.1.76:9091/v1/symptom/mapping/filter/getData';
  medicinesUrl = 'http://10.19.1.76:9091/v1/symptom/mapping/filter/getData';
  subBrandsUrl = 'http://10.19.1.76:9091/v1/symptom/mapping/filter/getData';
  subBrandsNameUrl = 'http://10.19.1.76:9091/v1/symptom/mapping/filter/getData';
  medicineDescriptionUrl = 'http://10.19.1.76:9091/v1/symptom/mapping/getMedicine/details?id=';

  // getAgeGroup(age: number): Observable<any> {
  //   const url = `${this.ageGroupUrl}${age}`;
  //   console.log('Age url : ' + url);
  //   return this.http.get<any>(url);
  // }

  getAgeGroup(): Observable<any> {
    const url = `${this.ageGroupUrl}`;
    console.log('Age url : ' + url);
    return this.http.get<any>(url);
  }


  getSubCategory(age: string): Observable<any>{
    const url = `http://10.19.1.76:9091/v1/symptom/mapping/getSubCategories?ageGroup=${age}&
    category=UPPER%20RESPIRATORY&supplierUniqueRecordId=1`;
    console.log('SubCategory url : ' + url);
    return this.http.get<any>(url);
  }

  getSymptoms(subCategoryData: object): Observable<any> {
    // const url = `${this.symptomsUrl}${subCategoryData}`;
    // console.log('Symptoms Url:' + url);
    console.log('Symptoms URL : ' + this.symptomsUrl);
    return this.http.post<any>(this.symptomsUrl, subCategoryData, httpOptions);
  }

  getMedicinesData(userData: object): Observable<any> {
    console.log('getBrands : ' + this.medicinesUrl);
    return this.http.post<any>(this.medicinesUrl, userData, httpOptions);
  }

  getSubBrands(subBrandsData: object): Observable<any> {
    // console.log('getSubBrands : ' + this.subBrandsUrl);
    return this.http.post<any>(this.subBrandsUrl, subBrandsData, httpOptions);
  }

  getMedicineForSubBrand(subBrandName: object): Observable<any> {
    // console.log('getMedicineForSubBrand : ' + this.subBrandsNameUrl);
    return this.http.post<any>(this.subBrandsNameUrl, subBrandName, httpOptions);
  }

  getMedicineDescription(medicineId: number , supplierID: number): Observable<any> {
    // console.log('Medicine ID : ' + medicineId);
    // console.log('getMedicineDescription : ' + this.medicineDescriptionUrl);
    // const url = `${this.medicineDescriptionUrl}${medicineId}`;
    const url = `http://10.19.1.76:9091/v1/symptom/mapping/getMedicine/details?id=${medicineId}&supplierUniqueRecordId=1`
    return this.http.get<any>(url);
  }

}
