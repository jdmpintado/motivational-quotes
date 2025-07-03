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

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");

  let instructionsInput = document.querySelector("#user-instructions");
  quoteElement.innerHTML = `<div class="generating">⌛Generating a motivational quote about ${instructionsInput.value}. </br></div>`;
  let prompt = `User instructions: generate a motivational quote regarding ${instructionsInput.value}`;
  let context =
    "You are an excepcional motivational leader, who inspire people through the wise words you use whenever they reach out to you, while they are facing challenges. Your mission is to generate a motivational quote according to the topic instructed by the user. You can use no more than 4 lines to display the quote. Display the quote in basic HTML (without mentioning it), in a <p> element and in italic, making sure, in case your quote is compound of several sentences, to add line breaks between sentences. Wrap the quote between quotation marks. After the quote, in a separate paragraph, sign as '» SheCodes AI'. Place the signature inside a <strong> element, removing the italic.";
  let apiKey = "c450930fa53b90f8c5ab74d6t08ao678";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
