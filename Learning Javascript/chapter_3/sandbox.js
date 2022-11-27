//const para = document.querySelector('body > h1');

//console.log(para);

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para);
})

console.log(paras[2]);

const errors = document.querySelectorAll('.error');
console.log(errors);

//get element by ID
const title = document.getElementById('page-title');
console.log(title);

//get element by class name
const emrors = document.getElementsByClassName('error');
//can get error class elements by two ways
console.log(emrors);
console.log(emrors[0]);
//cant use for each

//get element by tag name
const Paras = document.getElementsByTagName('p');
console.log(Paras);
//cant use for each


const Para = document.querySelector('p');
//console.log(Para.innerText);
//Para.innerText += ' ninjas are awesome!';

const PAras = document.querySelectorAll('p');

PAras.forEach(para =>{
    console.log(para.innerText);
})

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2>This is new H2</h2>';

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
//link.setAttribute('href','https://www.thenetninja.co.uk);
//link.innerText = 'The net ninja website';

const Title = document.querySelector('h1');

//title.setAttribute('style','margin :50px;');
//but it has a drawback can't add another style by this way

Title.style.color = 'crimson';
Title.style.margin = '50px';
Title.style.fontSize = '60px';





