function sum () {
    let sum = 0;
    for (args of arguments) {
        sum += args;
    }
    return sum;
}

