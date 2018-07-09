import quotes from '../data/quotes'
const LIST_quoteS = "LIST_quoteS";
const  fetchquotesAction = () => {
    return {type: LIST_quoteS,payload:quotes};
};
export default fetchquotesAction
