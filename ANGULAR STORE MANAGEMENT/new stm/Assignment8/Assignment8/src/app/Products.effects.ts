import { products } from './model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetProductActionSuccess,GetProductAction,GetProductActionError, AddProductActionSuccess, AddProductAction, saveRequestAction, saveFailureAction, saveSuccessAction, AddProductActionErrer, DeleteProduct } from './Store/product.action';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { ProductService } from './product.service';

@Injectable()
export class ProductEffects {

    loadProduct$ = createEffect(() => this.actions$.pipe(
      ofType(GetProductAction),
      exhaustMap(() => this.ProductService.getall()
      .pipe(
        map(products => GetProductActionSuccess({products})),
        catchError(() => EMPTY)
      ))
    ));


    storeProduct$=createEffect(()=>
        this.actions$.pipe(
            ofType(AddProductActionSuccess),
            mergeMap(({product})=>
            this.ProductService.adddata(product).
            pipe(map((product)=> AddProductAction({product})),
            catchError(()=>of(AddProductActionErrer()))
         ))
        ));

        
        deleteProduct$=createEffect(()=>
        this.actions$.pipe(
            ofType(DeleteProduct),
            mergeMap(({id})=>
            this.ProductService.deletedata(id).
            pipe(map((id)=> DeleteProduct({id})),
            catchError(()=>of(AddProductActionErrer()))
         ))
        ));

  constructor(
    private actions$: Actions,
    private ProductService: ProductService
  ) {}
// }
// @Injectable()
// export class AddProductEffects {

//   addProduct$ = createEffect(() => this.actions$.pipe(
//     ofType(AddProductAction),
//     mergeMap((action) => this.ProductService.adddata(action.payload)
//     .pipe(
//       map((products) => AddProductActionSuccess({products})),
//       catchError(() => EMPTY)
//     ))
//   ));

// constructor(
//   private actions$: Actions,
//   private ProductService: ProductService
// ) {}
}


