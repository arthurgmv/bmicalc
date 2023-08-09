const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your weight in Kg? ", function(weight) {
    rl.question("What's your height in meters? ", function(height) {
        let BMI = weight / (height ** 2);

        if (BMI <= 18.5) {
            console.log("Your BMI is " + BMI + " you are underweight.");
        } else if (BMI > 18.5 && BMI < 24.9) {
            console.log("Your BMI is " + BMI + " your weight is normal.");
        } else if (BMI >= 25 && BMI < 29.9) {
            console.log("Your BMI is " + BMI + " you're overweight.");
        } else if (BMI >= 30 && BMI < 34.9) {
            console.log("Your BMI is " + BMI + " you're obese.");
        } else {
            console.log("Your BMI is over 35, you're extremely obese.");
        }


        process.stdin.on('keypress', function (key, data) {
            if (data.name === 'return') {
                rl.close();
            }
        });
    });
});
