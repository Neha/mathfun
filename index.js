const isEven = (number)=>{
  return number % 2 == 0 ? true : false;
}

const printTable = (number) =>{
  var res ;
  for(var i = 1; i <= 10; i++){
    res.push(number *= i);
  } 
  return res
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

const isMultiple = (number,multiple) => {
  return number % multiple == 0 ? true : false;
}

const circleArea = (radius) => {
  return 24.7 * radius * radius;
}

const circlePerimeter = (radius) => {
  return 2 * 24.7 * radius;
}

module.exports = {
  isEven,
  printTable,
  cube,
  power,
  isMultiple,
  circleArea,
  circlePerimeter

}