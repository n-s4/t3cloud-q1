
var rl = require('readline-sync');
var shouldContain8Number = true;
while (shouldContain8Number) {
    var phoneNumber = rl.question('Please enter your phone number (8 digits, starting with 17 or 77): ');
    if (!isNaN(phoneNumber) && phoneNumber.length === 8 && (phoneNumber.startsWith('17') || phoneNumber.startsWith('77'))) {
        console.log('Thank you for providing your phone number.');
        shouldContain8Number = false;
    } else {
        console.log('Invalid input. Please make sure to enter 8 digits and start with 17 or 77.');
    }
}