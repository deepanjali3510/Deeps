// console.log("Open App");

// setTimeout(() => {
//     console.log("Data Loaded");
// }, 3000);

// console.log("User Clicked Search");
let order = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Order Confirmed");
    } else {
        reject("Order Failed");
    }

});