
import QuotesSelector from '../Selectors/QuoteSelector';
function useQuoteHook() {

        const randomNumber = Math.floor(Math.random() * 10) + 1;

        const quote = QuotesSelector(randomNumber)
    return { quote };
}

export default useQuoteHook;