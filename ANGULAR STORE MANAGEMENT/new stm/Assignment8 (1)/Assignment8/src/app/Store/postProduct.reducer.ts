//  import { createReducer, on } from '@ngrx/store';
//  import { AddProductAction, saveFailureAction, saveRequestAction, saveSuccessAction } from './product.action';

// export interface datastate
// {
// loading: boolean;
// error:string | null;
// }
// export const initialState: datastate = {
//   loading: false,
//   error: null
// };
// export const postDataReducer = createReducer(
//   initialState,
//   on(AddProductAction,(state) => ({...state, loading: true, error: null})),
// )
// on(saveRequestAction, state => ({...state,isLoading: true})),

// on(saveSuccessAction, (state, { item }) => ({
//   ...state,
//   isLoading: false,
//   selectedBook: item,
//   error: null
// })),

// on(saveFailureAction, (state, { error }) => ({
//   ...state,
//   isLoading: false,
//   error: error
// }))
