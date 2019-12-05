// 1. Создать микроверсию google: поле ввода и кнопка найти! 
// 2. Стилизация: кнопка должна быть зеленая, вокруг инпута должна быть красная граница, размер кнопки и инпута - больше стандартного
// 3. JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска
// 4. Если ввести в поиск слово google, нужно показать в алерте “Yandex круче. Но это не точно”


function toFind() {
	let googleWord = 'google';
	let browser = document.getElementById('search').value;
	alert(browser);
}
   if (browser == googleWord) {
   	alert("Yandex кручее");
 }
	
// 5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age

// let user = Star(); 
// let user = {     
//   name: "Sun",  
//   age: 4,603E9        
// };

// let user = Planet1(); 
// let user = {     
//   name: "Mercury",  
//   age: 4,503E9        
// };

// let user = Planet2(); 
// let user = {     
//   name: "Venus",  
//   age: 4,503E9        
// };

// let user = Planet3(); 
// let user = {     
//   name: "Earth",  
//   age: 4,543E9        
// };

// 6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел

// function superSum(){

// let num1, num2;
// num1 = Number(document.getElementById('n1').value);
// num2 = Number(document.getElementById('n2').value);

// alert(num1+num2);
	
// }

// 7. Создать массив из чисел в перемешку (не отсортированы). 
//   С помощью цикла for найти максимальный элемент в массиве

// let arr = [3, 5, 10, 8, 2],
// max = Math.max.apply(null, arr);

// alert(max);


// 8. Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами.



// let a = "XXX"; 
// let b = "YYYYYYYYYYYYYYY";

// let temp = a;
// a = b;
// b = temp;

// console.log(a); 
// console.log(b); 

// 10. Показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое,как и работало, в частности с “яндекс круче всех”, но с задержкой)

// function toFind() {
//   alert('Yandex круче');
// }

// setTimeout(toFind, 3000);
