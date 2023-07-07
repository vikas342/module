import { createAction, props } from '@ngrx/store';
import { posts } from '../model/posts.mode';

export const getallposts = createAction(
  'getall posts',
  props<{ posts: posts }>()
);


export const getallpostssuccess = createAction(
  'getall posts success',
  props<{ posts: posts[] }>()
);
