import { createFeatureSelector } from "@ngrx/store";
import { products } from "../model";




export const selctallproducts = createFeatureSelector<ReadonlyArray<products>>('products');
