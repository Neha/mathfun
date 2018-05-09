const isEven = (number)=>{
  return number % 2 == 0 ? true : false;
}

const printTable = (number) =>{
  for(var i = 1; i <= 10; i++){
          return number * i;
       } 
}

const square = (number) =>{
  return number * number ;
}

const cube = (number) =>{
  return number * number * number;
}

const power = (base,power) => {
   var res = 1;
   for (var i = 1; i <= power; i++){
       res *= base;  
      }
  return res;
}

module.exports = {
  isEven,
  printTable,
  cube,
  power

}