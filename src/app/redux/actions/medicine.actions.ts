import { createAction, props } from "@ngrx/store"


export const loadMedicines = createAction('[Medicine List] Store Medicine')
export const loadMedicinesSucces = createAction('[Medicine List] Store Medicine Success', props<{medicine: any}>())
export const loadMedicinesError = createAction('[Medicine List] Store Medicine Error', props<{error: any}>())