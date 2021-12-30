// // var, let, const
// // var is globally scope, so we don't use it anymore.

// // with let you can reassign values
// // with const you cannot reassign values, but you can reassing content
// // only use const unless you know you're going to reassign the value
// // you have to use a value if you use const, not with let

// // Data types
// // Primitive data types:
//   // Strings, Numbers, Boolean, null, undefined, Symbol

// // const name = 'John';
// // const age = 30;
// // const rating = 4.5;
// // const isCool = true;
// // const x = null; // typeOf says its object, but thats wrong, its null
// // const y = undefined;
// // let z; // also undefined

// // const firstName = 'John';
// // const age = 30;

// // Concatenation
// // console.log('My name is ' + firstName + ' and I am ' + age);

// // Template String
// // const hello = `My name is ${firstName} and I am ${age}`;
// // console.log(hello);

// // const s = 'technology, computers, it, code'

// // console.log(s.split(', '))

// /* Multi
// Line
// Comment */

// // Arrays are variables that hold multiple values

// // const fruits = ['apples', 'oranges', 'pears', 10, true];

// // fruits[3] = 'grapes';
// // fruits.push('mangoes');
// // fruits.unshift('strawberries');
// // fruits.pop();
// // console.log(Array.isArray(fruits));
// // console.log(fruits.indexOf('oranges'));
// // console.log(fruits);

// // Object literals

// // const person = {
// //   firstName: 'John',
// //   lastName: 'Doe',
// //   age: 30,
// //   hobbies: ['music', 'movies', 'sports'],
// //   address: {
// //     street: '50 main st',
// //     city: 'Boston',
// //     state: 'MA'
// //   }
// // }

// // console.log(person.hobbies[1]);

// // const { firstName, lastName, address: {city}} = person;
// // console.log(city);

// // person.email = 'john@gmail.com';

// // console.log(person);


// // const todos = [
// //   {
// //     id: 1,
// //     text: 'Take out trash',
// //     isCompleted: true
// //   },
// //   {
// //     id: 2,
// //     text: 'Meeting with boss',
// //     isCompleted: true
// //   },
// //   {
// //     id: 3,
// //     text: 'Dentist appointment',
// //     isCompleted: false
// //   }
// // ];

// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);

// // For loops

// // for(let i = 0; i <= 10; i++){
// //   console.log(`For Loop Number: ${i}`);
// // }

// // // While loops

// // let i = 0;
// // while(i < 10) {
// //   console.log(`While Loop Number: ${i}`);
// //   i++;
// // }


// // for(let i = 0; i < todos.length; i++){
// //   console.log(todos[i].text);
// // }

// // for(let todo of todos){
// //   console.log(todo.text);
// // }

// // forEach, map, filter

// // todos.forEach(function(todo) {
// //   console.log(todo.text);
// // });


// // const todoCompleted = todos.filter(function(todo){
// //   return todo.isCompleted === true;
// // }).map(function(todo){
// //   return todo.text;
// // });

// // console.log(todoCompleted);

// // double equals matches the content, triple equals matches the data type as well
// // const x = 6;
// // const y = 11;

// // if(x > 5 && y > 10) {
// //   console.log('x is more than 5 or y is more than 10');
// // }

// // const x = 11;
// // const color = x > 10 ? 'red' : 'blue';

// // // Switches

// // switch (color) {
// //   case 'red':
// //     console.log('color is red');
// //     break;

// //   case 'blue':
// //     console.log('color is blue');
// //     break;

// //   default:
// //       console.log('color is not red or blue');
// //     break;
// // }

// // const addNums = num1 => num1 + 5;

// // console.log(addNums(5));

// // todos.forEach((todo) => console.log(todo))

// // Constructor function
// // function Person(firstName, lastName, dob) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.dob = new Date(dob);
// // }

// // Person.prototype.getBirthYear = function() {
// //   return this.dob.getFullYear();
// // }

// // Person.prototype.getFullName = function(){
// //   return `${this.firstName} ${this.lastName}`;
// // }

// // Class
// // class Person {
// //   constructor(firstName, lastName, dob) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.dob = new Date(dob);
// //   }

// //   getBirthYear(){
// //     return this.dob.getFullYear();
// //   }

// //   getFullName(){
// //     return `${this.firstName} ${this.lastName}`;
// //   }
// // }

// // // Instatiate object
// // const person1 = new Person('John', 'Doe', '4-3-1980');
// // const person2 = new Person('Mary', 'Smith', '3-6-1970');

// // console.log(person2.getFullName());
// // console.log(person2);


// // Selectors

// // Single element

// // console.log(document.getElementById('my-form'));
// // console.log(document.querySelector('h1'));

// // // Multiple element
// // console.log(document.querySelectorAll('.item'));
// // console.log(document.getElementsByClassName('item'));
// // console.log(document.getElementsByTagName('li'));

// // const items = document.querySelectorAll('.item');
// // console.log(items);

// // items.forEach((item) => console.log(item));


// // const ul = document.querySelector('.items');

// // // ul.remove();
// // // ul.lastElementChild.remove();
// // ul.firstElementChild.textContent = 'Hello';
// // ul.children[1].innerText = 'Brad';
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// // const btn = document.querySelector('.btn');
// // // btn.style.background = 'red';

// // btn.addEventListener('mouseout', (e) => {
// //   e.preventDefault();
// //   document.querySelector('#my-form').style.background = '#ccc';
// //   document.querySelector('body').classList.add('bg-dark');
// //   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// // });

// const myForm = document.querySelector('#my-form');
// const nameImput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if(nameImput.value === '' || emailInput.value === ''){
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameImput.value} : ${emailInput.value}`));

//     userList.appendChild(li);

//     //Clear fields
//     nameImput.value = '';
//     emailInput.value = '';
//   }
// }
