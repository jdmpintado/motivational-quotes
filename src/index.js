function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User instructions: generate a motivational quote regarding ${instructionsInput.value}`;
  let context =
    "You are an excepcional motivational leader, who inspire people through the wise words you use when they reach out to you, while they are facing challenges. Your mission is to generate a motivational quote according to the topic instructed by the user. You can use no more than 4 lines to display the quote. Display the quote in basic HTML (without mentioning it), in a <p> element. After the quote, in a separate paragraph, sign as 'SheCodes AI'. Place the signature inside a <strong> element.";
  let apiKey = "c450930fa53b90f8c5ab74d6t08ao678";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
