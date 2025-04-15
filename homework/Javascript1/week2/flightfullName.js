function getFullname(firstname, surname, useFormalName, gender) {
    if (!firstname && !surname) {
        return ("please enter your name");
    }
    const title = (useFormalName) ? (gender === "male" ? "lord" : "lady") : "";
    return title + " " + firstname + " " + surname;
}
console.log(getFullname("Payal", "Rattan", true, "female"));
console.log (getFullname("Payal", "Rattan", false, "female")); 
 console.log(getFullname("Abhishek", "Sharma", true, "male")); 
 console.log(getFullname("Abhishek", "Sharma", false, "male")); 
console.log(getFullname("", "", false, "male"));