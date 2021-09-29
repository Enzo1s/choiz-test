import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FaqService } from "src/app/services/controllers/faq.service";
import * as faqActions from "../actions/faq.action"


@Injectable()
export class FaqEffects {
    loadFaqs$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(faqActions.loadFaqs),
            mergeMap(() => {
                return this.faqService.getAll().pipe(
                    map((faqs) => faqActions.loadFaqsSuccess({ faqs })),
                    catchError((error) => of(faqActions.loadFaqsError({ error })))
                )
            })
        )
    })

    constructor(private actions$: Actions, private faqService: FaqService) { }
}