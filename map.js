/* const container = [11,11,22,33,44];
const fillContainer = [];
for (const number of container){
    const fillUp = number * 2;
    fillContainer.push(fillUp);
   
}
console.log(fillContainer);
console.log(object); */
const number = [11,22,11,33,44];
const square = number.map(x => x * x);
console.log(square);