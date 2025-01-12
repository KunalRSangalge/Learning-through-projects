let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

btn1.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
});
btn2.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});
btn3.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});
btn4.addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});