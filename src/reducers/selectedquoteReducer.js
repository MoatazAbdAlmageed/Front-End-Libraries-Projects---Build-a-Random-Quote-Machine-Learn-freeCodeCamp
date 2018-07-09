export default function selectedquoteReducer(state = {}, action) {

    switch (action.type) {
        case "SELECT_quote":
            state =  { quote: action.payload};
            break;
        default:
            return state;
    }
    return state
}


