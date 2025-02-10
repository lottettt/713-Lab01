let count = 1;

waitAndPrint = (message, delay) => {
    setInterval(() => {
        console.log(message + ' ' + 'world'.repeat(count));
        count++;
    }, delay);
}

waitAndPrint("Hello,", 3000); 
