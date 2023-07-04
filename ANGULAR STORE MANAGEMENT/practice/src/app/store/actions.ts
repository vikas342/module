import { createAction, props } from "@ngrx/store";
import { products } from "../model";





export const productApiAction = createAction('[retrive data] retrive data', props<{products:ReadonlyArray<products>}>());
