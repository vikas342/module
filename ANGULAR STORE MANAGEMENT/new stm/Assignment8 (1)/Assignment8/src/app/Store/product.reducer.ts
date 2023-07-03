import { createReducer, on } from '@ngrx/store';
import { GetProductActionSuccess, AddProductActionSuccess, AddProductAction, DeleteProduct } from './product.action';
import { products } from '../model';

export const initialState : ReadonlyArray<products> = [];

export const GetProductReducer = createReducer(
  initialState,
  on(GetProductActionSuccess, (state,{products}) => products),
  on(AddProductAction, (state, {product}) => [...state,product]),
  on(DeleteProduct, (state, {id}) =>
  state.filter(x=> x.id!=id)
  )
)
