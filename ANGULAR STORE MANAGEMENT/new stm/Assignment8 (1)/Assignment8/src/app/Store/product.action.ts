
import { createAction, props } from "@ngrx/store";
import { products } from "../model";

export enum ActionTypes {
  SAVE_REQUEST = '[Book] Save',
  SAVE_FAILURE = '[Book] Save Failure',
  SAVE_SUCCESS = '[Book] Save Success',
}
export const GetProductActionSuccess = createAction('[Product List] Get Products',props<{products : Array<products>}>())
export const GetProductActionError = createAction('[Product List] Get Products Error');
export const GetProductAction = createAction('[Product List] Get Products');

export const AddProductActionSuccess = createAction('[Product Form] Add Product success',props<{product : products}>())
export const AddProductAction = createAction('[Product Form] Add Product',props<{product : products}>())
export const AddProductActionErrer = createAction('[Product Form] Add Product Errer')

export const DeleteProduct = createAction('[Product Form] Delete Product',props<{id : any}>())


export const saveRequestAction = createAction(
  ActionTypes.SAVE_REQUEST,
  props<{ item: products }>()
);

export const saveFailureAction = createAction(
  ActionTypes.SAVE_FAILURE,
  props<{ error: string }>()
);

export const saveSuccessAction = createAction(
  ActionTypes.SAVE_SUCCESS,
  props<{ item: products }>()
);
