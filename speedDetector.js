const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector() {
    rl.question("Enter car speed (km/h): ", (input) => {
        let speed = parseInt(input);

        // Validate input
        if (isNaN(speed) || speed < 0) {
            console.log("Invalid input. Enter a positive number.");
        } else {
            if (speed < 70) {
                console.log("Ok");
            } else {
                let points = Math.floor((speed - 70) / 5);
                if (points > 12) {
                    console.log("License suspended");
                } else {
                    console.log(`Points: ${points}`);
                }
            }
        }

        // Close the input stream
        rl.close();
    });
}

// Call the function
speedDetector();
