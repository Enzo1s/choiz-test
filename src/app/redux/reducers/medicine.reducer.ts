import { createReducer, on } from "@ngrx/store";
import * as medicineActions from "../actions/medicine.actions";

export interface MedicineState {
    medicines: any;
    loading?: boolean;
    error?: any;
}

const initialState: MedicineState = {
    medicines: null,
    loading: true,
    error: null
}

const _medicineReducer = createReducer(
    initialState,
    on(medicineActions.loadMedicines, (state, action) => ({ 
        medicines: undefined,
        loading: true
     })),
    on(medicineActions.loadMedicinesSucces, (state, action) => ({
        medicines: action.medicine,
        loading: false
    })),
    on(medicineActions.loadMedicinesError, (state, action) => ({
        loading: false,
        medicines:null,
        error: {
            status: action.error.status,
            message: action.error.message
        },
    })
    )
)

export function medicineReducer(state: MedicineState, action: any) {
    return _medicineReducer(state, action);
}