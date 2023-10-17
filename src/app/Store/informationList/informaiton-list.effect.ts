import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap } from "rxjs";


@Injectable()

export class informationEffect{

  constructor(private action$:Actions){

    // _production = createEffect(() =>
    //   this.action$.pipe(
    //     ofType(loadselectedproductionline),
    //     exhaustMap((data) => {
    //       return this.
    //     })
    //   )
    // )
  }
}
