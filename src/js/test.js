import {firstName, lastName, year} from './mod';

export default function setName(element) {
  const arr = [1, 2, 3, 4];
  const [first, second] = arr;
  console.log(first+second);
}

// //proxy not supported
// var pipe = (function () {
//   var pipe;
//   return function (value) {
//     pipe = [];
//     return new Proxy({}, {
//       get: function (pipeObject, fnName) {
//         if (fnName == "get") {
//           return pipe.reduce(function (val, fn) {
//             return fn(val);
//           }, value);
//         }
//         pipe.push(window[fnName]);//[3,double,pow,reverseInt]
//         return pipeObject;
//       }
//     });
//   }
// }());

// var double = n => n * 2;
// var pow = n => n * n;
// var reverseInt = n => n.toString().split('').reverse().join('') | 0;

// document.write(pipe(3).double.pow.reverseInt.get);


// var mySymbol = Symbol();

// // 第一种写法
// var a = {};
// a[mySymbol] = 'Hello!';

// // 第二种写法
// var a = {
//   [mySymbol]: 'Hello!'
// };

// // 第三种写法
// var a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// // 以上写法都得到同样结果
// a[mySymbol] // "Hello!"


// var s1 = Symbol('foo');
// var s2 = Symbol('bar');

// s1 // Symbol(foo)
// s2 // Symbol(bar)

// s1.toString() // "Symbol(foo)"
// s2.toString() // "Symbol(bar)"


//为属性设定默认值，options覆盖defaults
// const DEFAULTS = {
//   logLevel: 0,
//   outputFormat: 'html'
// };

// function processContent(options) {
//   let options = Object.assign({}, DEFAULTS, options);
// }



// var cart = {
//   _wheels: 4,

//   get wheels () {
//     return this._wheels;
//   },

//   set wheels (value) {
//     if (value < this._wheels) {
//       throw new Error('数值太小了！');
//     }
//     this._wheels = value;
//   }
// }



// //递归转换循环
// function tco(f) {
//   var value;
//   var active = false;
//   var accumulated = [];

//   return function accumulator() {
//     accumulated.push(arguments);
//     if (!active) {
//       active = true;
//       while (accumulated.length) {
//         value = f.apply(this, accumulated.shift());
//       }
//       active = false;
//       return value;
//     }
//   }
// };

// var sum = tco(function(x, y) {
//   if (y > 0) {
//     return sum(x + 1, y - 1)
//   }
//   else {
//     return x
//   }
// });

// console.log(sum(1, 100000));

///this
// function Timer () {
//   this.seconds = 0
//   setInterval(() => this.seconds++, 1000)
// }
// var timer = new Timer();
// setTimeout(() => console.log(timer.seconds), 3100);

// //默认值提醒
// function throwIfMissing() {
//   throw new Error('Missing parameter');
// }

// function foo(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }

// foo()


// //函数默认值
// function Point(x = 0, y = 0) {
//   this.x = x;
//   this.y = y;
// }

// var p = new Point();
// console.log(JSON.stringify(p));

// //babel不支持，ES标准已删除
// var a1 = [1, 2, 3, 4];
// var a2 = [for (i of a1) i * 2];
// console.log("test:"JSON.stringify(a2));

// //空位遍历
// let arr = [, ,];
// for (let i of arr) {
//   console.log(1);
// }
// // 1
// // 1

// ///数字entries
// let letter = ['a', 'b', 'c'];
// let entries = letter.entries();
// console.log(entries.next().value); // [0, 'a']
// console.log(entries.next().value); // [1, 'b']
// console.log(entries.next().value); // [2, 'c']

// for (let [index, elem] of ['a', 'b'].entries()) {
//   console.log(index, elem);
// }

//字符串转换数组，防止大与\uffff的字符的错误解析
// function countSymbols(string) {
//   return Array.from(string).length;
// }
//字符转义 用于正则
// function escapeRegExp(str) {
//   return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
// }

// let str = '/path/to/resource.html?search=query';
// escapeRegExp(str)

// var sender = 'tester';
// var message =
//   SaferHTML`<p>${sender} has sent you a message.</p>`;

// function SaferHTML(templateData) {
//   var s = templateData[0];
//   for (var i = 1; i < arguments.length; i++) {
//     var arg = String(arguments[i]);

//     // Escape special characters in the substitution.
//     s += arg.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");

//     // Don't escape special characters in the template.
//     s += templateData[i];
//   }
//   return s;
// }
// alert(`SaveHtml:${message}`);



// //tagged template
// var a = 5;
// var b = 10;

// function tag(s, v1, v2) {
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);

//   return "OK";
// }

// tag`Hello ${ a + b } world ${ a * b}`;

// ///字符串
// let basket = {
// 	count: 31,
// 	onSale: 99999
// };
// let element = document.createElement("div");
// element.className = "message";
// let textNode = document.createTextNode(`
//   There are ${basket.count} items
//    in your basket, ${basket.onSale}
//   are on sale!!!
// `);
// element.appendChild(textNode);
// document.body.appendChild(element);

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
