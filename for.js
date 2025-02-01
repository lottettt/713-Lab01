let names = ['Pusit', 'Worawat', 'Film', 'Tide', 'Kornkanok'];

for (let i = 0; i < names.length; i++) {
    if (names[i].length >= 6) {
        console.log('สวัสดีคุณ ' + names[i]);
    } else {
        console.log('Hello ' + names[i]);
    }
}