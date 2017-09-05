var originalText = process.argv.slice(2);
var breakDown;
var pigLatin;
var pigSentence = '';

for(var i = 0;i < originalText.length; i++){

  breakDown = originalText[i].split('');
  pigLatin = '';

  for(var n = 1; n < breakDown.length; n++){

    pigLatin = pigLatin + breakDown[n];

  }

  pigLatin = pigLatin + breakDown[0] + 'ay';

  if(i < originalText.length - 1){

    pigSentence = pigSentence + pigLatin + ' ';
    console.log(pigSentence);

  }
  else{

    pigSentence = pigSentence + pigLatin;

  }
}

console.log(pigSentence);