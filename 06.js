// 요구사항
// 1. 전기차 클래스 만들기
//

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 클락션을 울리는 메서드
  makeNoise() {
    console.log(`${this.modelName}: 빵!`);
  }
}

// 자동차 만들기
//   const car1 = new Car("Sorento", "2023", "e", 5000);
//   const car2 = new Car("SM5", "1999", "g", 3000);
//   const car3 = new Car("QM6", "2010", "g", 4500);
//   car1.makeNoise();
//   car2.makeNoise();
//   car3.makeNoise();

class electronicCar extends Car {
  constructor(modelName, modelYear, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.price = price;
  }
}
