//通常の関数
// function fn(number) {
//     return number * 2
// }

// console.log(fn(2));

// //アロー関数
// const fnArrow = (number) => {
//     return number * 2;
// }

// console.log(fnArrow(2));

// //引数が１つ、return以降の本文が１行の時、簡略化できる
// const fnArrow = number => {
//     return number * 2;
// }

// console.log(fnArrow(2));

// const fnArrowObj = number => ({ result: number * 2})

// // console.log(fnArrow(2));
// console.log(fnArrowObj(4));

import { hello } from "./module.js";
import { User } from "./module.js";
import functionB from "./module.js";//defualtは名前を変えられる
hello ();//実行
functionB();

// const user = new User("Tom");//classはnewをつけて使用
// user.hello();

// //コールバック関数
function print(callback) {
    const result = callback(2);
    console.log(result);
}

// function fn(number) {
//     return number * 2
// }

// debugger;
// print(fn);

//0はfalthy、1はtruthy
// const a = 0;
// let result = a ? 10 : -10;
// console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));

//論理積(&&)
//&&より左側がfalthyの値ならそれを返す
//両方がtruthyなら右側を返す
const resultA = "" && "foo";
const resultB = NaN && 0;//両方falthyなら左を返す
const resultC = "foo" && 4;

console.log(resultA);
console.log(resultB);
console.log(resultC);

//理論和
//truthyなら返す、両方truthyなら左を返す
const resultD = "" || "foo";

console.log(resultD);

//非同期処理
//同期処理はコードを順番に読み込んでいくこと
let a = 0;

//resolvea(a)により、2000ミリ秒後1が代入され、
//それをthen(b)へ代入される
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);
}).then((b) => {
    console.log(b);
})


//await/asyncで簡略化
const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 4000);
})

console.log(result);


