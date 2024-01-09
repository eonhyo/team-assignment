// Getters와 Setters
// 객체지향 프로그래밍언어 -> G, S
// 클래스 -->객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)

class Rectangle {
  constructor(height, width) {
    // _ : private(은밀하고, 감춰야할때)
    this._height = height;
    this._width = width;
  }

  get width() {
    return this._width;
  }
  set width(value) {
    if (value <= 0) {
      console.log("가로길이는 0보다 커야합니다.");
    } else if (typeof value !== "number") {
      console.log("입력된 타입이 숫자가 아닙니다.");
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }
  set height(value) {
    if (value <= 0) {
      console.log("세로길이는 0보다 커야합니다.");
    } else if (typeof value !== "number") {
      console.log("입력된 타입이 숫자가 아닙니다.");
    }
    this._height = value;
  }
  //   getArea : 가로 * 세로 => 넓이
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 => ${a}입니다.`);
  }
}

const Rectangle1 = new Rectangle(10, 30);
Rectangle1.getArea();
