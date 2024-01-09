// 상속(Inheritance)
// Class ->유산으로 내려주는 주요 기능!
// 부모 <-> 자식

// 동물 전체에 대한 클래스

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says!`);
  }
}

const me = new Animal("나");
me.speak();

class Dog extends Animal {
  // 부모에게서 내려받은 메서드를 재정의할 수 있음 overriding

  speak() {
    console.log(`${this.name} bowwow!`);
  }
}
const jindotgae = new Dog("태식이");
jindotgae.speak();
