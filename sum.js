var args = process.argv.slice(2);
console.log(args);

if(isNaN(args[0]) || isNaN(args[1])){

  console.log('At least one of these inputs is not a number');

} else {

  console.log(Number(args[0]) + Number(args[1]));

}