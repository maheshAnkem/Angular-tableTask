import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getsmartphones(){
    return this.http.get("https://dummyjson.com/products/category/smartphones")
  }
  getlaptops(){
    return this.http.get("https://dummyjson.com/products/category/laptops")
  }
  getCategory(){
    return this.http.get("https://dummyjson.com/products/categories");
  }
  getData(){
    return this.http.get("https://github.com/maheshAnkem/explore-india/blob/main/db.json")
  }
}
