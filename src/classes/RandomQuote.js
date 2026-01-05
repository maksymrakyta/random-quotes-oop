import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  /**
 
*1. Each async function returns Promise
*2. If on the "await" line of code Promise is rejected, code in the same blocj below "await" is not executed
*3. Promise returned by the getRandomQuoteViaAPI function will be always fulfilled
because we catch all possible errors.
*4. Resukt of the fulfilled promise will be either Quote or undefined
*5. Therefore there is not need for try/catch block where we call the function
 */
  static async getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const { id, quote, author } = await response.json();
      //resolves promise to Quote (promise becomes "fulfilled")
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
      /**
       * 1. Returns undefined implicitly (resolves promise to undefined)
       * 2. Promise will become "fulfilled"
       **/
    }
  }
  // static getRandomQuoteViaAPI() {
  //   const url = 'https://quoteslate.vercel.app/api/quotes/random';
  //   const options = { headers: { 'Content-Type': 'application/json' } };

  //   return fetch(url, options)
  //     .then((response) => response.json())
  //     .then(({ id, quote, author }) => new Quote(id, quote, author))
  //     .catch((error) => console.error('Error', error));
  // }
}

export default RandomQuote;

// function getRandomQuote() {
//   // const randomIndex = generateRandomInt(quotes);
//   // const randomQuote = { ...quotes[randomIndex] };
//   // return randomQuote;
//   return { ...quotes[generateRandomInt(quotes)] };
// }
// export { getRandomQuote };
