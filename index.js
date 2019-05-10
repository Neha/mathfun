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

const reverseNumber = (number) =>{
  var num =  number.toString()
               .split('')
               .reverse()
               .join('');
   return num;
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
  return Math.PI * radius * radius;
}

const circlePerimeter = (radius) => {
   return 2 * Math.PI * radius ;
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

const quadEqnRoot = (a, b, c) => {
  var discrminant = (b**2) - (4*a*c);
  if(discrminant< 0) {
    return false;
  }
  else{
    var root1 = (-b + Math.sqrt(discrminant)) / (2 * a);
    var root2 = (-b - Math.sqrt(discrminant)) / (2 * a);
    return [root1, root2];
  }
}

module.exports = {
  isEven,
  printTable,
  power,
  reverseNumber,
  cube,
  square,
  isMultiple,
  circleArea,
  circlePerimeter,
  squarePerimeter,
  squareArea,
  RecArea,
  RecPerimeter,
  quadEqnRoot,
  printTable

}