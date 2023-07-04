import { createReducer, on } from "@ngrx/store";
import { products } from "../model"
import { productApiAction } from "./actions";
import { state } from "@angular/animations";


export const initialstate:ReadonlyArray<products>=[];


export const productreducer= createReducer(
  initialstate,
  on(productApiAction,(state,{products})=> products)
)




// const featureReducer = createReducer(
//   initialState,
//   on(featureActions.action, state => ({ ...state, prop: updatedValue })),
// );

// export function reducer(state: State | undefined, action: Action) {
//   return featureReducer(state, action);
// }
