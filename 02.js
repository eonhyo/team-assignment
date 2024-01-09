class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }
  get modelName() {
    return this._modelName;
  }
  set modelName(value) {
    // 유효성 검사
    if (value.length <= 0) {
      console.log("[오류] 모델명이 입력되지 않았습니다. 확인해주세요!");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
      return;
    }

    // 검증이 완료된 경우에만 setting!
    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }
  set modelYear(value) {
    if (typeof value !== "number") {
      console.log("숫자가 아닙니다.");
    } // 유효성 검사
    this._modelYear = value;
  }
  get type() {
    return this._type;
  }
  set type(value) {
    if (typeof value !== "string") {
      console.log("문자가 아닙니다.");
    }
    this._type = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      console.log("숫자가 아닙니다.");
    }
    this._price = value;
  }

  makeNoise() {
    console.log(`이 차는 ${this.modelYear}년식 ${this.modelName} 입니다. 
 타입은${this.type}이고 가격은 ${this.price}입니다. `);
  }
}

const bents = new Car(12, "바보", "중형차", "2억");
console.log(bents.modelName);
const Ferari = new Car("페라리", "22", "스포츠카", "4억");
