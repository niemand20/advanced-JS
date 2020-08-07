const numbers = [1,2,3,4,5,23,2,3,4,4,44,33,22,23,25,35];
/*const output = [];

for (let i = 0;i<numbers.length;i++){
    const element = numbers[i];
    const result = element**2;
    output.push(result);
}*/


//console.log(output);

/*function square(element){
    return element*element;

}
numbers.map(function(element,index,array){
    console.log(element,index,array);
});*/
/*function square(element){
    return element*element;
}
const result = numbers.map(function(element){
    return element**2
})

console.log(result);*/
/*
map
const result = numbers.map(x=>x**3);
console.log(result);*/

//forEach
//find
//reduce

const result  = numbers.filter(x=>x%5==0 || x%3==0)
console.log(result);
const isThere = numbers.find(x =>x<5);
console.log(isThere);
