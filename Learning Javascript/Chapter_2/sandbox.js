alert('hello,world');
let age = 25;
let year = 2022;
console.log(age,year);
console.log('hello world');
let firstname = 'Ashwini Kumar';
console.log(firstname);
console.log('true', false);

const grade = 'D';

switch(grade){
    case 'A': console.log('you got A');
    break;
    case 'B': console.log('you got B');
    break;
    case 'C': console.log('you got C');
    break;
    case 'D': console.log('you got D');
    break;
    case 'E': console.log('you got E');
    break;
    default : console.log('you got F');
    break;
}

let Age = 40;

if(true){
    let Age = 30;
    let name = 'Saun';
    console.log('inside output: ', Age,name);
}

console.log('outside output: ', Age,name);

//function decleration
function greet(){
    console.log('Hello there!');
}

greet();

//function expression
const speak = function(){
    console.log('good day!');
};
speak();

const Speak = function(name){
    console.log('good day ${name}');
};

Speak('Ashwini');


//regular function
const calcarea = function(radius){
    let area = 3.14*radius**2;
    return area;
}

const area = calcarea(5);
console.log(area);

//arrow function
const Calcarea = (radius) => 3.14*radius**2;      
console.log(Calcarea(5));   

//functions

const Greet = () => 'hello';
let resultone = Greet();
console.log(resultone);

//methods

let resulttwo = name.toUpperCase();
console.log(resulttwo);

//object literals

let user = {
    name: 'Ashwini',
    age: 18,
    email: 'ashwini04@kgpian.iitkgp.ac.in',
    hobbies: ['playing football','listening music'],
    login: function(){
        console.log('The user is logged in');
    },
    loghobbies: function(){
        console.log('This user has following hobbies: '),
        this.hobbies.forEach(hobby => {
            console.log(hobby);
            })
    }
};

user.loghobbies();

user.login();

console.log(user);

//primitive values
let scoreone = 50;
let scoretwo = scoreone;
console.log('scoreone : ${scoreone}','scoretwo : ${scoretwo}');





