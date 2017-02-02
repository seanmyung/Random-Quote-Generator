var quotes = [
  {
    quote:"Life isn't simple. But the beauty of it is, you can always start over. It'll get easier",
    source:'Alacia bessette',
    citation:', Simply from Scratch',
    year:', 2010',
    tag: ', Life'
  },

  {
    quote:'Man is born to live, not to prepare for life.',
    source:'Boris Pasternak',
    citation:', Doctor Zhivago',
    year:', 1958',
    tag:', Life'
  },

  {
    quote:'To love and be loved is to feel the sun from both sides.',
    source:'David Viscott',
    citation:', How to Live with Another Person',
    year:', 1974',
    tag: ', Love'
  },

  {
    quote:'There is no remedy for love but to love more.',
    source:'Henry David Thoreau',
    citation:', Journal',
    year:', 1839',
    tag: ', Love'
  },

  {
    quote:'Try not to become a man of success but rather to become a man of value',
    source:'Albert Einstein',
    citation:'',
    year:'',
    tag: ', Success'
  },

  {
    quote:'Find somebody to be successful for. Raise their hopes. Think of their needs.',
    source:'Barack Obama',
    citation:', Arizona State Commencement',
    year:', 2009',
    tag: ', Success'
  },

  {
    quote:'Those who dreams by day are cognizant of many things which escape those who dream only by night.',
    source:'Edgar Allan Poe',
    citation:', Eleonora',
    year:'',
    tag: ', Dream'
  },

  {
    quote:'Human beings have an inalienable right to invent themselves',
    source:'Germaine Greer',
    citation:', O Magazine',
    year:', 2002',
    tag: ', Dream'
  },

  {
    quote:'Keep true to the dreams of thy youth.',
    source:'Friedrich von Schiller',
    citation:'',
    year:'',
    tag: ', Dream'
  },

  {
    quote:'Misfortune shows those who are not really friends.',
    source:'Aristotle',
    citation:', Eudemian Ethics',
    year:'',
    tag: ', Friendship'
  },
];

var rgbColor;
var click;
var matchArr=[]; //make matched array with quotes array
for(i=0;i< quotes.length;i++){
  matchArr.push(i); //store values one by one
}
var copyArr = matchArr.slice(); //copy matchArr to copyArr

//make random number within quotes length.
function getRandomQuote() {
      var randomNumber = Math.floor(Math.random() * copyArr.length); //extract random number withine my array length
//No number repeat until all number displayed once
      if(copyArr.length>1){
       pos = copyArr[randomNumber];
       copyArr.splice(randomNumber, 1);
      } else if(copyArr.length==1){
        pos = copyArr[0];
        copyArr = matchArr.slice();
      }
   return quotes[pos]; // return quotes object
}

//make random RGB
function randomRGB() {
  return Math.floor( Math.random() * 256);
}

//make random color and return it
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';

  return color;
}

//print quotes on and change background color randomly.
function printQuote() {
  rgbColor = randomColor();
  document.body.style.backgroundColor = rgbColor;  // background color call randomColor function

  var quoteArr = getRandomQuote();  // save quotes object
  var quoteClass = document.getElementsByClassName('quote')[0];
  quoteClass.innerHTML = quoteArr.quote;  //show quotes
  var message = quoteArr.source + quoteArr.citation + quoteArr.year + quoteArr.tag; // store source, citation, year, tag on message variable
  var quoteSource = document.getElementsByClassName('source')[0];
  quoteSource.innerHTML = message; // show source, citation, year, tag
  //document.write(getRandomQuote())
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
click = document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//If click the button, show quotes. If not, show quotes repeately every 5 seconds
if(click === true) {
 printQuote();
} else {
  window.setInterval(printQuote, 5000);
}
