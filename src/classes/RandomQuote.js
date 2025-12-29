import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
}

export default RandomQuote;

// function getRandomQuote() {
//   // const randomIndex = generateRandomInt(quotes);
//   // const randomQuote = { ...quotes[randomIndex] };
//   // return randomQuote;
//   return { ...quotes[generateRandomInt(quotes)] };
// }
// export { getRandomQuote };
