import { createAction, props } from "@ngrx/store";
import { products } from "../model";

export const GetProductActionSuccess = createAction('[Product List] Get Products',props<{products : Array<products>}>())
export const GetProductActionError = createAction('[Product List] Get Products Error');
export const GetProductAction = createAction('[Product List] Get Products');
