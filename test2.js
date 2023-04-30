var fibGenerator = function* () {
  var naturalNumber = 0;
  var index = 0;
  var lst = [];
  // Infinite Generation
  while (true) {
    if (index == 0) {
      lst.push(0);
      index++;
      yield 0;
    } else if (index == 1) {
      lst.push(1);
      index++;
      yield 1;
    } else {
      lst.push(lst[index - 1] + lst[index - 2]);
      index++;
      yield lst[index - 2] + lst[index - 3];
    }
  }
};
// var gen = fibGenerator();
// for (let i = 0; i <= 10; i++) {
//   console.log(gen.next().value);
// }

// const mp={} ;
// mp["sneht"]=10 ;
// console.log(mp) ;
class emp {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName = function () {
    return this.name;
  };
  getAge = function () {
    return this.age;
  };
}
emp.prototype.snehit = function (str) {
  console.log(this.name);
};
// Array.prototype.snehit = function (str) {
//   for (let e of this) console.log(e);
// };
// var arr = [1, 2.2, 2, 3, 12.2];
// console.log(arr.length) ;
// arr.snehit("hell");

// const _ = require("lodash");
// var users= _.groupBy(arr , Math.floor) ;
// console.log(users) ;

var E = new emp("en", 10);
// console.log(E.getAge()) ;
// E.snehit("e");

// var obj=[] ;
// obj.push({value:"sne" , time:"10"}) ;
// for(let e in obj)
// console.log(obj[e]) ;

class constra {
  constructor(number, phone, address) {
    this.number = number;
    this.phone = phone;
    this.address = address;
  }
  getName = function () {
    console.log("timer is on");
  };
}

// var c1 = new constra("9811110742", "191", "h64");
// // // console.log(c1);
// var timer = setTimeout(c1.getName, 1000);
// clearTimeout(timer) ;

var jsonStringify = function (object) {
  if (object == null) {
    return "null";
  }
  if (typeof object == "string") {
    return '"' + object + '"';
  }
  if (typeof object == "number") {
    return String(object);
  }
  if (Array.isArray(object)) {
    const items = object
      .map((item) => {
        return jsonStringify(item);
      })
      .join("|");
    return "[" + items + "]";
  }
  if (typeof object == "object") {
    const keys = Object.keys(object);
    const items = keys.map((key) => {
      return '"' + key + '"' + ":" + jsonStringify(object[key]);
    });
    return "{" + items.join("|") + "}";
  }
};
var c2 = [1, 2, 3, 4, 5];
// const item = c2
//   .map((item) => {
//     return String(item);
//   })
//   .join(".");
// var c3 = jsonStringify(c2);
// console.log(c3);
// var obj = {};
// obj["snehit"] = [1, 2, 3, 4];
// console.log(obj);
// obj = jsonStringify(obj);
// console.log(obj);

let result = Array(4)
  .fill([])
  .map(() => []);

let result2 = Array(5)
  .fill([])
  .map((_, x) => {
    return x + 1;
  });
// console.log(result2) ;

// var a=10;
// function fun()
// {
// var a=20;
// console.log(a);
// }
// {
//   let a=29;   //block scope works for let
// }
// console.log(a);
// const paint = function () {
//   changeColortoRed = function () {
//     paintcolor = "RED";
//     return "RED";
//   },
//     changeColortoBue = function () {
//       paintcolor = "Blue";
//       return "Blue";
//     };
// };
let paintColor = "red";
const paint = (() => {
  return {
    changeColorToBlue: () => {
      paintcolor = "Blue";
      return paintColor;
    },
    changeColorToGreen: () => {
      paintColor = "Green";
      return paintColor;
    },
  };
})();
// console.log(paint.changeColorToBlue());
var rando = function* () {
  while (true) {
    yield Math.floor(Math.random() * 100);
  }
};
// var gen = rando();
// for (let i = 0; i < 10; i++) console.log(gen.next().value);
window.c