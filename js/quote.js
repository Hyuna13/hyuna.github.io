const quoteForm = document.querySelector(".quote-form"),
quote = quoteForm.querySelector("p"),
author = quoteForm.querySelector("span")


function randomQuote() {
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      quote.innerText = result.content;
      author.innerText = result.author;
  })
}

setInterval(randomQuote, 200000)