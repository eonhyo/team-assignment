// // Class 라는 설계도를 만들어 봅시다!
// class Person {
//   // 사람이기 때문에 필수요소 name, age

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   } //생성자 함수

//   //   메서드 형태의 동사표현
//   sayHello() {
//     console.log(`${this.name} Hello`);
//   }
// }

// 설계도를 통해 인스턴스를 만들어봅시다
// const person1 = new Person("Kim", "31");
// console.log(person1);
// const person2 = new Person("길순", "28");
// console.log(person2);
// person1.sayHello();
// person2.sayHello();

class Age {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  sayHello() {
    console.log(`${this.name} 나이는 ${this.age}살 이에요~`);
  }
}

const person1 = new Age(29, "애쉬");
person1.sayHello();
