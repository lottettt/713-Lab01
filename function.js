const return_max = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// console.log(return_max(10, 500));


const multiply = (a, b) => {
    return a * b;
}

// console.log(multiply(3,2));
module.exports = {
    multiply,
};