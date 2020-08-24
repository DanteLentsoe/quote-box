/* array of quotes */
const QUOTES = [{quote:"To hope is to stare into the face of death, waiting for life, hope is irrational.",author:"- Dante Lentsoe"},
                    {quote:"Fear of death is naive, we lay our heads to rest our minds everyday, to glimpse on our eventual inevitable death, we fear it. Yet, we only need to perform the act once, that we practised for our whole lives", author:"- Dante Lentsoe"},
                     {quote:"Boredom is the test of endurance for the mind to remain silent, without interruptions. If you hate boredom, you hate the state of your mind, change it.",author:"- Dante Lentsoe"},
                   {quote:"Love is the ability to remain senseless, wittey, poor, selfless, and basically suicidal, for an extended period of time.",author:"- Dante Lentsoe"}
];

window.onload = init; 


/* function of intialization */
function init() {

generateNewQuote();

}


/*Making function for generating random quotes */

function generateNewQuote()
{
  let quotesLength = QUOTES.length;
 
let randomQuoteGen = Math.floor(Math.random() * QUOTES.length); 

let randomQuoteDisplay = QUOTES[randomQuoteGen]; // this is to say that the array of quotes  should perform randomQuoteGen method which is sequencing a random array

  // Twitter link varible 
  let tweetlink = "https://twitter.com/intent/tweet?hashtags=quotes&related=";

 //fetching an API to pass data particularly the ones from twitter

let tweetAPIQuote = randomQuoteDisplay.quote.replace(/ /g, "%20"); //the / /g is used to replace the global spaces 
  tweetlink+= tweetAPIQuote;


  // for the author you follow the same principless
  let tweetAPIAuthor = randomQuoteDisplay.author.replace(/ /g, "%20");

tweetlink+= " -" + tweetAPIAuthor; // the " -" is made in order to add space


//document.getElementById('tweet-quote').href = "/url";
document.getElementById('tweet-quote').href = tweetlink;

  document.getElementById('text').innerText = randomQuoteDisplay.quote; // display random quote
  document.getElementById('author').innerText= randomQuoteDisplay.author; //display author of the called random quote


}
