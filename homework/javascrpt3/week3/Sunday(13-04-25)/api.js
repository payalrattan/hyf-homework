class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} ${this.age}`;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", async () => {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const age = parseInt(document.getElementById("age").value, 10);
        if (!firstName || !lastName || isNaN(age)) {
            alert("Please fill in all fields correctly.");
            return;
        }
        const person = new Person(firstName, lastName, age);
        // Convert class instance to plain object to avoid prototype issues
        const personData = {
            firstName: person.firstName,
            lastName: person.lastName,
            age: person.age,
        };
        console.log("Sending data to API:", personData);
        try {
            const response = await fetch("https://hackyourfuture-etdeezbnfphqfmgv.westeurope-01.azurewebsites.net/person",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(personData),
                }
            );
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to send data. Server said: ${errorText}`);
            }
            const text = await response.text();
            if (text) {
                const result = JSON.parse(text);
                console.log("Success:", result);
            } else {
                console.log("Success: No response body");
            }
            alert("Person data sent successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Error sending data. See console for details.");
        }
    }); // ← close the 'click' event
}); // ← close DOMContentLoaded