const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGradeGenerator() {
    rl.question("Enter student marks (0-100): ", (input) => {
        let marks = parseInt(input);

        // Validate input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
        } else {
            // Determine the grade
            let grade;
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 50) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            console.log(`Grade: ${grade}`);
        }

        // Close the input stream
        rl.close();
    });
}

// Call the function
studentGradeGenerator();

