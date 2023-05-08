import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Array<object>>('https://fakestoreapi.com/products');
  }

  getProduct(id: number) {
    return this.http.get<Array<object>>('https://fakestoreapi.com/products/' + id);
  }
}
