import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { medicineReducer, MedicineState } from "./medicine.reducer";
import { faqReducer, FaqState } from "./faq.reducer";

/**
 * Add here the your reducer for import in app.module.
 */
export const reducers = {
    medicineReducer,
    faqReducer
}

/**
 * whit this you can specify the type in Store in your component ***** ( public store: Store<IStates> ) 
 */
export interface IState {
    medicineReducer: MedicineState;
    faqReducer: FaqState,
}
/***************************************************** */
//    Lets see an example of component:
//    constructor(private slideStore: Store<IStates>){}
//    ...
//    ...
//    this.store.dispatch( //action from slidesReducer// )
//    this.Store.select('slidesReducer').subscribe...
//
/***************************************************** */



/* export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : []; */