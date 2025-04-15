// // const array =[0,1,2,3,4,5,6,7,8,9]
// // const mapArray = array.filter((number)=>
// // {
// //     return number%2==0;
// // })
// // console.log(mapArray);
// // console.log(array);

// const mentors = [
//     { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4 },
//     { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1 },
//     { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8 },
//     { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3 },
//     { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2 },
//     { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9 }
// ];

// console.log(mentors);
// const filterArray = mentors.filter((mentor) => {
//     return mentor.yearOfExperience > 2;
// });
// console.log(filterArray);
// const mapArray = filterArray.map((mentor) => {
//     return `${mentor.name} has ${mentor.yearOfExperience} of yearOfExperience`;
// })
// console.log(mapArray);
// const filteredMentors = mentors.filter((mentor) => {
//     let hasHtml = mentor.subjects.filter((subject) => subject === "HTML");
//     console.log(hasHtml);
//     return hasHtml.length > 0;
// });
// console.log(filteredMentors);

// const filteredMentors2 = mentors.filter((mentor) => mentor.subjects.filter((subject) => subject === "HTML").length > 0);
// console.log(filteredMentors2);
//  const sortMentors = mentors.sort(()=>{

//  })

const sortArray = [234, 6.4, 76, 32.8, 344222, 41, 0];
sortArray.sort((num1,num2)=>num1-num2);
console.log(sortArray);


const DescArray = [234, 6.4, 76, 32.8, 344222, 41, 0];
DescArray.sort((num1,num2)=>num2-num1);
console.log(DescArray);

