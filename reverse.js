var myReverse = process.argv.slice(2);
var breakDown;
var reverseString;

for(var i = 0;i < myReverse.length; i++){

  breakDown = myReverse[i].split('');
  reverseString = '';
  console.log(breakDown);

  for(var n = breakDown.length - 1; n >= 0; n--){

    reverseString = reverseString + breakDown[n];

  }

  console.log(reverseString);

}