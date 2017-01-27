"use strict"

function test(arg) {
	if (arg === 0) {
		arg = prompt("Напишите фамилию");
	} else if (arg === 1) {
		arg = prompt("Напишите имя");
	} else if (arg === 2) {
		arg = prompt("Напишите отчество");
	}

	while (!arg) {
		arg = prompt("Пишите внимательно и правильно!!!");
	}

	return arg;
}

var fullName = [0,1,2];
fullName[0] = test(fullName[0]);
fullName[1] = test(fullName[1]);
fullName[2] = test(fullName[2]);
	
var age = parseFloat(prompt("Напишите возраст в годах"));

	while ((isNaN(age)) === true || !age || age >= 100 || age <= 0) {
		age = parseFloat(prompt("Пишите првильный возраст в годах", '18'));

	}

var gender = confirm("Ваш пол - мужской?\nесли Мужской - ок, если Женский - отмена");

	function genderStr(argument) {
		if (argument) {
			return "мужской";
		} else {
			return "женский";
		}
	}

var pensionableAge, //пенсионный возраст для женщин - 55, для мужчин - 60
	pensionableAgeFemale,
	pensionableAgeMale;
	
	pensionableAgeFemale = (age >= 55 && !gender) ? "да" : "нет";

	pensionableAgeMale = (age >= 60 && gender) ? "да" : "нет";

	pensionableAge = (gender === true) ? pensionableAgeMale : pensionableAgeFemale

alert("ваше ФИО: " + fullName.join(" ") + "\nваш возраст в годах: " + age + "\nваш возраст в днях: " + (age * 365) + 
	"\nчерез 5 лет вам будет: " + (age + 5) + "\nваш пол: " + genderStr(gender) + "\nвы на пенсии: " + pensionableAge);










// // -------------------------------------------------------------------------------------------------------------------------------
// var fullName = prompt("Напишите фамилию, имя, отчество");
	
// 	while (!fullName) {
// 		fullName = prompt("Напишите фамилию, имя, отчество", 'Иванов Иван Иванович');
// 	}
	

// var age = prompt("Напишите возраст в годах");
	
// 	while (!age || age >= 100 || age <= 0) {
// 		age = prompt("Напишите возраст в годах", '18');
// 	}

// 	age = Number(age);

// var gender = confirm("Ваш пол - мужской?\nесли Мужской - ок, если Женский - отмена");
	
// 	gender = (gender == true || false) ? "мужской" : "женский";

// var pensionableAge, //пенсионный возраст для женщин - 55, для мужчин - 60
// 	pensionableAgeFemale,
// 	pensionableAgeMale;
	
// 	pensionableAgeFemale = (age >= 55 && gender === "женский") ? "да" : "нет";

// 	pensionableAgeMale = (age >= 60 && gender === "мужской") ? "да" : "нет";

// 	gender === "мужской" ? pensionableAge = pensionableAgeMale : pensionableAge = pensionableAgeFemale

// alert("ваше ФИО: " + fullName + "\nваш возраст в годах: " + age + "\nваш возраст в днях: " + (age * 365) + "\nчерез 5 лет вам будет: " + (age + 5) + "\nваш пол: " + gender + "\nвы на пенсии: " + pensionableAge);
