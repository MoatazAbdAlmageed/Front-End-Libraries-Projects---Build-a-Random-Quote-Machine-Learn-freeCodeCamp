import combineReducers from "redux/src/combineReducers";

import  quotesList from "./listquotesReducer"
import selectedquote from "./selectedquoteReducer";
export  default  combineReducers({
    quotesList,
    selectedquote,
})