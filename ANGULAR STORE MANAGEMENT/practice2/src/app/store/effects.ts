import { Injectable,Pipe } from "@angular/core";
import { ApiService } from "../services/api.service";
 import { createEffect,Actions,ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { GetapiData, GetapiDataFailure, GetapiDataSuccess } from "./actions";

@Injectable()

export class dataeffects{

  constructor(private actions$:Actions,private api:ApiService){}


  loaddata$=  createEffect(() => {
    return this.actions$.pipe(
        ofType(GetapiData),
        exhaustMap(() =>
          this.api.getdata().pipe(
            map(data =>GetapiDataSuccess({ data })),
            catchError(error => of(GetapiDataFailure( ))))
          ),
    );
  });



}
