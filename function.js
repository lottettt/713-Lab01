x = [12, 30, 15, 50]

function sum_array(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

console.log(sum_array(x));