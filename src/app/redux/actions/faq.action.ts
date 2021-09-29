import { createAction, props } from "@ngrx/store";


export const loadFaqs = createAction('[FAQ List] Store FAQ')
export const loadFaqsSuccess = createAction('[FAQ List] Store FAQ Success', props<{faqs:any}>())
export const loadFaqsError = createAction('[FAQ List] Store FAQ Error', props<{error: any}>())