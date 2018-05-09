const isEven = (number)=>{
  return number % 2 == 0 ? true : false;
}

const printTable = (number) =>{
  for(var i = 0; i <= 10; i++){
          return this.number * i ;
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

modules.export = {
  isEven,
  printTable,
  cube,
  power

}