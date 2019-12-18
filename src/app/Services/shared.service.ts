import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private ageData: string;
  private subCategory: string;
  private medicinesData = [];
  private gotSymptoms: boolean;
  private integerAge: number;
  private symptomsData = [];
  private subBrandsData = [];
  private brandName: string;

  setIntegerAge(age) {
    this.integerAge = age;
  }

  getIntegerAge() {
    return this.integerAge;
  }

  setBrand(brand){
    this.brandName = brand;
  }

  getBrand(){
    return this.brandName;
  }

  setSymptoms(symptoms) {
    // console.log('Symptoms : ' + symptoms);
    this.symptomsData = symptoms;
  }

  getSymptoms() {
    return this.symptomsData;
  }


  setSubCategory(value) {
    this.subCategory = value;
  }

  getSubCategory() {
    return this.subCategory;
  }

  setAge(age) {
    this.ageData = age;
  }

  getAge() {
    return this.ageData;
  }

  setGotSymptoms(symptoms) {
    this.gotSymptoms = symptoms;
    // console.log('Symptoms : ' + symptoms);
  }

  getGotSymptoms(){
    return this.gotSymptoms;
  }

  setMedicines(medicines) {
    this.medicinesData = medicines;
    // console.log('setMedicines : ' + this.medicinesData);
  }

  getMedicines() {
    // console.log('getMedicines : ' + this.medicinesData);
    return this.medicinesData;
  }

  setSubBrands(subBrands) {
    this.subBrandsData = subBrands;
  }

  getSubBrands() {
    return this.subBrandsData;
  }
}
