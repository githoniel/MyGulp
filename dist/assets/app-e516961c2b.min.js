"use strict";

var basket = {
  count: 31,
  onSale: 99999
};
var element = document.createElement("div");
element.className = "message";
var textNode = document.createTextNode("\n  There are " + basket.count + " items\n   in your basket, " + basket.onSale + "\n  are on sale!!!\n");
element.appendChild(textNode);
document.body.appendChild(element);

// 字符串补齐长度暂不支持
// console.log('x'.padStart(5,'aa'));

// //字符串处理
// var s = 'Hello world!';

// console.log(s.startsWith('world', 6)); // true
// console.log(s.endsWith('Hello', 5)); // true
// console.log(s.includes('Hello', 6)); // false
// //解构兑换参数
// var [a, b] = [1, 3];
// [a, b] = [b, a];
// console.log(a, b);
// /**
//  * 解构多个函数返回参数
//  */
// {
// 	function example() {
// 	  return [1, 2, 3];
// 	}
// 	var [a, b, c] = example();
// 	console.log(a+" "+b+" "+c);
// }
// /**
//  * 解构多个函数返回参数
//  */
// {
// 	function example() {
// 	  return {
// 	    foo: 1,
// 	    bar: 2
// 	  };
// 	}
// 	var { foo, bar } = example();

// 	console.log(foo);
// }

// /**
//  * [jsonData description]
//  * @type {Object}
//  */
// {
// 	var jsonData = {
// 	  id: 42,
// 	  status: "OK",
// 	  data: [867, 5309]
// 	}

// 	let { id, status, data: number } = jsonData;

// 	console.log(id, status, number);
// }
// //for循环
// {
// 	var map = new Map();
// 	map.set('first', 'hello');
// 	map.set('second', 'world');

// 	for (let [key, value] of map) {
// 	  console.log(key + " is " + value);
// 	}
// }
// //测试双字节字符
// function is32Bit(c) {
//   return c.codePointAt(0) > 0xFFFF;
// }

// console.log(is32Bit("𠮷")); // true
// console.log(is32Bit("a")); // false

// //need polyfill
// //https://github.com/es-shims/String.prototype.at
// console.log('𠮷'.at(0));