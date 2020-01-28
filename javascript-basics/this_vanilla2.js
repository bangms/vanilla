'use strict';

/*
 * Quiz #1
 *
 * 아래와 같이 사용할 수 있는 .repeatify라는 method를 만들어 주세요.
 *
 * var str = "hello";
 * str.repeatify(1); => "hello"
 * str.repeatify(2); => "hello_vanilla_hello"
 * str.repeatify(3); => "hello_vanilla_hello_vanilla_hello"
 * str.repeatify(4); => "hello_vanilla_hello_vanilla_hello_vanilla_hello"
 *
 * argument는 자연수만 가능합니다.
 *
 */

String.prototype.repeatify = function (num) {

	var str1 = "_vanilla_" + this;

	if (typeof num !== "number") {
		throw new Error('type error');
	} else {
		num = parseInt(num);

		if (num === 1) {
			return this;
		} else {
			return this + str1.repeat(num);
		}
	}
	

}

var str = "hello";

console.log(str.repeatify(1));
console.log(str.repeatify(2));
console.log(str.repeatify(3));


/*
 * Quiz #2
 *
 * 아래와 같이 사용할 수 있는 bind라는 함수를 만들어주세요.
 *
 */

 var ken = { age: 34 };
 var wan = { age: 30 };
 
  function logAge () {
    console.log(this.age);
  }
 
  var fn1 = bind(logAge, ken);
  var fn2 = bind(logAge, wan);
 
  fn1();  // 34
  fn2();  // 30

 function bind (fun, thisArg) {
 	return fun.bind(thisArg);
 }


/*
 * Quiz #3
 *
 * 아래와 같이 사용할 수 있는 add라는 이름의 함수를 만들어주세요.
 *
 * var addThree = add(3);
 * var addTen = add(10);
 *
 * addThree(10);  =>  13
 * addThree(20);  =>  23
 *
 * addTen(10);   =>  20
 * addTen(100);  =>  110
 *
 */


function add (num) {

	if (typeof num !== "number") {
		throw Error('type error');
	} else {
		return function (num1) {
			if (typeof num1 !== "number") {
				throw Error('type error');
			} else {
				return console.log(num + num1);
			}
		}
	}
}
// isNaN으로 했을 경우 '10'을 인자로 넣었을 경우 error가 아니라 "310" // "1010" 등의 문자형식으로 출력됨

