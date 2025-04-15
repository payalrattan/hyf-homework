let userName = "";
let todos = [];

function getReply(command) {
    command = command.toLowerCase(); // Normalize command case

    // Greet and Save User Name
    if (command.startsWith("hello my name is ")) {
        let newName = command.replace("hello my name is ", "").trim();
        if (userName && userName !== newName) {
            return `You already introduced yourself as ${userName}.`;
        }
        userName = newName;
        return `Nice to meet you, ${userName}`;
    }

    // Get User Name
    if (command === "what is my name?") {
        return userName ? `Your name is ${userName}` : "I don't know your name yet.";
    }

    // Add Item to Todo List
    if (command.startsWith("add ")) {
        let item = command.replace("add ", "").replace(" to my todo", "").trim();
        todos.push(item);
        return `${item} added to your todo.`;
    }

    // Remove Item from Todo List
    if (command.startsWith("remove ")) {
        let item = command.replace("remove ", "").replace(" from my todo", "").trim();
        let index = todos.indexOf(item);
        if (index !== -1) {
            todos.splice(index, 1);
            return `Removed ${item} from your todo.`;
        }
        return `${item} is not in your todo list.`;
    }

    //  Get Todo List
    if (command === "what is on my todo?") {
        return todos.length > 0
            ? `You have ${todos.length} todos: ${todos.join(", ")}`
            : "Your todo list is empty.";
    }

    // Get Today's Date
    if (command === "what day is it today?") {
        const today = new Date();
        const options = { day: "numeric", month: "long", year: "numeric" };
        return today.toLocaleDateString("en-GB", options);
    }

    // Simple Math Calculations
    if (command.startsWith("what is ")) {
        let mathExpression = command.replace("what is ", "").trim();
        try {
            return eval(mathExpression); // Evaluate the math expression
        } catch {
            return "I cannot calculate that.";
        }
    }

    // Set a Timer
    if (command.startsWith("set a timer for ")) {
        let timeInMinutes = parseInt(command.replace("set a timer for ", "").replace(" minutes", "").trim());
        if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
            return "Invalid timer duration.";
        }
        setTimeout(() => console.log("Timer done!"), timeInMinutes * 60000);
        return `Timer set for ${timeInMinutes} minutes.`;
    }

    return "I didn't understand that command.";
}

// 🎤 Example Commands:
console.log(getReply("Hello my name is Payal")); // Nice to meet you, Benjamin
console.log(getReply("What is my name?")); // Your name is Benjamin
console.log(getReply("Add fishing to my todo")); // fishing added to your todo
console.log(getReply("What is on my todo?")); // You have 1 todo: fishing
console.log(getReply("Remove fishing from my todo")); // Removed fishing from your todo
console.log(getReply("What is on my todo?")); // Your todo list is empty
console.log(getReply("What day is it today?")); // e.g., 10 of March 2025
console.log(getReply("What is 4 + 4?")); // 8
console.log(getReply("Set a timer for 1 minutes")); // Timer set for 1 minute (and after 1 min: "Timer done!")
