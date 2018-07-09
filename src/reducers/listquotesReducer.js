
const LIST_quoteS = "LIST_quoteS";
const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE";



export default function selectedquoteReducer(state = [], action) {

    switch (action.type) {
        case LIST_quoteS :
            return {...state , quotes: action.payload};

        case GET_RANDOM_QUOTE :
            let ran = Math.floor(Math.random() * 100) + 1 ;
            return {...state , quote: action.payload[ran]};

        default:
            return state;
    }

}


