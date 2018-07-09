const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE";
const  getRandomQuote = (quotes) => {
    return {type: GET_RANDOM_QUOTE,payload:quotes};
};
export default getRandomQuote
