const class07Students = [];
function addStudentToClass(studentName) {
 if(class07Students.length===6 && studentName!=="Queen")
 {
    console.log("Cannot add more students to class 07");
 }
 else if (class07Students.includes(studentName)) {
    console.log("Student" + " "+ studentName +" "+"is already in the class");
 }
 else if(!studentName)
 {
    console.log("Cannot add an empty string to the class.");
 }
 else
 {
    class07Students.push(studentName);
 }
}
function getNumberOfStudents() {
    return class07Students.length;
}
addStudentToClass("Payal");
addStudentToClass("Ishani");
addStudentToClass("Mahika");
addStudentToClass("Abhi");
addStudentToClass("Soni");
addStudentToClass("Soni");
addStudentToClass("Rubita");
addStudentToClass("Kashika");
addStudentToClass("");
console.log(class07Students);
console.log(getNumberOfStudents());
addStudentToClass("Queen");
console.log(class07Students);
console.log(getNumberOfStudents()); 