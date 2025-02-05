const object = {
    name : 'John',
    age : 30,
    city : 'New York'
}

console.log(object);
console.log(object.name);

const jsonStr = JSON.stringify(object);
console.log(jsonStr);

const info_object = {
    name : 'Henry',
    surname : 'Fayol',
    age : 22,
    grade : 2.4
}

const retire = (info_object) => {
    if (info_object.grade < 2.5) {
        return 'คุณ ' + info_object.name + ' ' + info_object.surname + ' ผ้นสภาพนักศึกษา';
    } else {
        return JSON.stringify(info_object);
    }
}

console.log(retire(info_object));