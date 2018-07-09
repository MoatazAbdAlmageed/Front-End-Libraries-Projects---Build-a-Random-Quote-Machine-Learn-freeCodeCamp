export const SELECT_quote = "SELECT_quote";
export default function selectquoteAction(quotes) {
    return {type: SELECT_quote, payload: quotes};
}
