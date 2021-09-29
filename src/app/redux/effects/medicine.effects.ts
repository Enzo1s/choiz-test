import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs";
import { map, catchError, switchMap, mergeMap } from "rxjs/operators";
import { MedicineService } from "src/app/services/controllers/medicine.service";
import * as medicinesActions from "../actions/medicine.actions";

@Injectable()
export class MedicineEffects {
    loadMedicines$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(medicinesActions.loadMedicines),
            mergeMap((action) => {
                return this.medicineService.getAll().pipe(
                    map((medicine) => medicinesActions.loadMedicinesSucces({ medicine })),
                    catchError((error) => of(medicinesActions.loadMedicinesError({ error }))
                    )
                );
            })
        )
    })

    constructor(private actions$: Actions, private medicineService: MedicineService) { }
}