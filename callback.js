function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Rahim Mama'
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Selim Molla');
greeting(greetingHandler, 'Tom Moody');
greeting(greetingHandler, 'Ramjan Ali');
greeting(greetEvening, 'Tom Jerry');
greeting(greetEvening, 'Tom Hell');
greeting(greetNight,'Sakib Khan');

function submitHandler(){
    console.log('submit button clicked');
}

document.getElementById('btn-submit').addEventListener('click', submitHandler)