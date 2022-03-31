const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = () => {
  return tutorials.map(function(title){
    return title.split(' ').map(word => {return word[0].toUpperCase() + word.substring(1);
    console.log(`title:${title}`)
  })
  .join(' ');
  })
}*/

const titleCased = () => {
  return tutorials.map(words => 
    words.split(' ').map(capt => 
      capt.charAt(0).toUpperCase() + capt.slice(1)).join(' '))
};