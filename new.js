const number=[9,2,4,5,3,45,];
const natija=number.reduce((result, number)=>{
    return result*number;
});
const students=["Ali","Hamid","Zahra", "Maryam","Ali","Zahra","joni","Ali"];
const resulted=students.some((student)=>{
    return student.includes("a");
})
const studentNum=students.reduce((acc,student)=>{
    acc[student]=(acc[student] || 0)+1;
return acc
},{})
const text=["Hi","there","Good","morning","!","Hope","You are","doing","great"];
const sen=text.join(" ")
const deleted=number.shift();
number.unshift(444);
const teachers=["Karim","Hassan","Juma","Mina"];
const total=teachers.some((teacher)=>{
    return teacher.includes("Juma");
})
const name="Ali Agha";
const named=name.length;
console.log(name.toUpperCase());
const lastName="REZAEI";
console.log(lastName.toLowerCase());