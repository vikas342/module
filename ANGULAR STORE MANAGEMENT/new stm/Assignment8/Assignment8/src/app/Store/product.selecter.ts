import { createSelector, createFeatureSelector } from '@ngrx/store';
import { products } from '../model';

export const selectproducts = createFeatureSelector<ReadonlyArray<products>>('products');
