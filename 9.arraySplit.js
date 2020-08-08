const nums = [1,2,3,4,5,6,7,8,9,10];
//const part = nums.slice(2,5);
//slice doesn't change main array. splice changes main array
const removed = nums.splice(2,2,23,23);
console.log(removed);
console.log(nums);

const together = nums.join(", ");
console.log(together);

const names = ["sam","jam","kam","dam","fam","tam","jack"];
const names1 = names.slice(1,5);
console.log(names1);
const names2 = names.splice(2,3,"nam","lam");
console.log(names);
console.log(names2);
console.log(names);

const names3 = names.join(", ");
console.log(names3);

//negative slicing can also be done
const num = [1,2,3,4,5,6,8,9,10,12]
const negSlice = num.slice(-4);
console.log(negSlice);

const negSplice = num.splice(-2);
console.log(negSplice);
console.log( num);
