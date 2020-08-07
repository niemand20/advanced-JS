const students = [
    {id:21, name: 'omar sunny'},
    {id:22, name:"manna"},
    {id : 33, name:"mousumi"},
    {id:44, name: "dipjol"}
]

/*const students1 = [];

for (let i = 0;i<students.length;i++){
    const element = students[i];
    const result1 = element.name;
    const result2 = element.id;
    students1.push(result1,result2);
    
}
console.log(students1);*/

const names = students.map(s=>s.name);
console.log(names);
const evenNames = students.filter(s=>s.name.length%2==0)
console.log(evenNames);