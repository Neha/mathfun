const isEven = (number)=>{
  return number % 2 == 0 ? true : false;
}

const printTable = (number, to = 10) =>{
  var res  = [];
  for(var i = 1; i <= to; i++){
    res.push(number * i);
  } 
  return res;
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
  return Math.pi * radius * radius;
}

const circlePerimeter = (radius) => {
   return 2 * Math.pi * radius;
}

const RecPerimeter = (length, breadth) => {
  return 2 * (length + breadth);
}

const RecArea = (length, breadth) => {
  return length * breadth;
}

const squareArea = (side) => {
  return side * side;
}

const squarePerimeter = (side) => {
  return 4 * side;
}

module.exports = {
  isEven,
  cube,
  power,
  isMultiple,
  circleArea,
  circlePerimeter,
  squarePerimeter,
  squareArea,
  RecArea,
  RecPerimeter,
  printTable

}