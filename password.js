function obfuscate (string){

  var breackDown = string.split('');
  var reform = '';

  for(var i = 0; i < breackDown.length; i++){

    switch(breackDown[i]){
    case 'a':
      reform = reform + '4';
      break;
    case 'e':
      reform = reform + '3';
      break;

      reform = reform + '0';
      break;
    case 'l':
      reform = reform + '1';
      break;
    default:
      reform = reform + breackDown[i]
      break;
    }
  }

  return reform;

}

var thing = 'abracadabra';

console.log(obfuscate(thing));

