import { createAction, props } from "@ngrx/store";
import { products } from "../model/model";



export const GetapiData = createAction('get api data');
export const GetapiDataSuccess = createAction('get api data',props<{data:Array<products>}>());
export const GetapiDataFailure = createAction('get api datafailure');

