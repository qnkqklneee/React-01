//通常の関数
// function fn(number) {
//     return number * 2
// }

// console.log(fn(2));

//アロー関数
// const fnArrow = (number) => {
//     return number * 2;
// }

// console.log(fnArrow(2));

//引数が１つ、return以降の本文が１行の時、簡略化できる
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

const user = new User("Tom");//classはnewをつけて使用
user.hello();

//コールバック関数
function print(callback) {
    const result = callback(2);
    console.log(result);
}

function fn(number) {
    return number * 2
}

debugger;
print(fn);

