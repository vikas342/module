import { ActionCreator, createReducer,on } from "@ngrx/store";
import { products } from "../model";
import { GetProductActionSuccess } from "./actions";
import { state } from "@angular/animations";
import { TypedAction } from "@ngrx/store/src/models";



export  const initialstate :ReadonlyArray<products>=[]


export const getproductreducer=createReducer(
  initialstate,
  on(GetProductActionSuccess, (state,{products}) => products),
)


