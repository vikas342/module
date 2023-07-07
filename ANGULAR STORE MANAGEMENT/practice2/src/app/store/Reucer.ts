import { createReducer, on } from "@ngrx/store";
import { products } from "../model/model"
import { GetapiDataSuccess } from "./actions";
import { state } from "@angular/animations";


export const initialstate:ReadonlyArray<products>=[]


export const getproductsreducers= createReducer(
  initialstate,
 on(GetapiDataSuccess,(state,{data})=>data),
);
