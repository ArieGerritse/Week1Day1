var pigLatin = process.argv.slice(2);
var breakDown;
var gibberish;
var sentence = '';

for(var i = 0;i < pigLatin.length; i++){

  breakDown = pigLatin[i].split('');
  gibberish = '';

  for(var n = 1; n < breakDown.length; n++){

    gibberish = gibberish + breakDown[n];


    if(n === breakDown.length - 1){

      gibberish = gibberish + breakDown[0] + 'ay';

    }

  }

  if(i < pigLatin.length - 1){

    sentence = sentence + gibberish + ' ';

  }
  else{

    sentence = sentence + gibberish;

  }
}

console.log(sentence);