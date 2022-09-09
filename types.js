// strongly typed language
// int a = 5;
// string b = 'selim molla';
// bool c = True;
// object student = {name: 'sakib khan', id: 22}
// int[] numbers = [12, 23, 45]
// string[] friends = ['rahim', 'karim', 'selim'];

//JavaScript is a dynamic typed language

// primitive type
const a = 5;
const b = 'rahim go to school';
const d = true;


// non -primitive 
const ages = [23, 21, 55];
const student = {id: 23, class: 5};


// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
q.job = 'front end developer';
console.log(p, q);