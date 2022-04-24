const quotes = [
  {
    quote: "Morality is herd instinct in the individual.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Seek not every quality in one individual.",
    author: "Confucius",
  },
  {
    quote: "Strong reasons make strong actions.",
    author: "William Shakespeare",
  },
  {
    quote: "Education is a progressive discovery of our own ignorance.",
    author: "Will Durant",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
  {
    quote: "I wasted time, and now doth time waste me.",
    author: "William Shakespeare",
  },
  {
    quote: "What makes the engine go? Desire, desire, desire.",
    author: "Stanley Kunitz",
  },
  {
    quote: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein",
  },
  {
    quote: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick",
  },
  {
    quote: "What we dwell on is who we become.",
    author: "Oprah Winfrey",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;