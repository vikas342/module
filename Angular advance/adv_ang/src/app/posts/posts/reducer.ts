import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { posts } from 'src/app/model/posts.mode';
import { getallpostssuccess } from 'src/app/store/actions';


export const initaialstate: ReadonlyArray<posts> = [];

export const getreducer=createReducer(
  initaialstate,
  on(getallpostssuccess,(state,{posts})=>posts)
)


