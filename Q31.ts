// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


// 1st way
let usernames: string[] = [];

if (usernames.length === 0) {
    console.log('We need to find some users!');
} else {
    for (let username of usernames) {
        if (username.toLowerCase() === 'Azam') {
            console.log('Hello Azam, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// 2nd way

let users: string[] = []; // Empty list of users

// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // If the list is not empty, remove all usernames
    users = [];
    console.log("All usernames have been removed.");
}
