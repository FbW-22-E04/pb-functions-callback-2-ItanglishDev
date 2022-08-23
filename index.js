const squareNumber = (n) => n * n

console.log(squareNumber(3));


// const sqaure = (array, squareNumber) => array.forEach(number) => squareNumber(number);

function sqaure(arr, func) {
  for (const key in arr) {
    console.log(func(key));
  };
}

const array = [1, 2, 3, 4, 5, 6]
sqaure(array, squareNumber)  // return [1,4,9,16,25]



