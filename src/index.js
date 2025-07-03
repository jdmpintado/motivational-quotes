//function displayQuote()

function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Here you have a motivational quote about the topic you submitted",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
