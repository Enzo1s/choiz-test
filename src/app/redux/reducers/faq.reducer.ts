import { createReducer, on } from "@ngrx/store"
import * as faqActions from "../actions/faq.action"


export interface FaqState {
    faqs: any;
    loading: boolean;
    error: any;
}

const initialState: FaqState = {
    faqs: null,
    loading: true,
    error: null
}

const _faqReducer = createReducer(
    initialState,
    on(faqActions.loadFaqs, (state, action) => ({
        faqs: undefined,
        loading: true,
        error: null
    })),
    on(faqActions.loadFaqsSuccess, (state, action) => ({
        faqs: action.faqs,
        loading: false,
        error:null
    })),
    on(faqActions.loadFaqsError, (state, action) => ({
        faqs:null,
        loading: false,
        error: {
            status: action.error.status,
            message: action.error.message
        }
    }))
)

export function faqReducer(state: FaqState, action: any) {
    return _faqReducer(state, action);
}