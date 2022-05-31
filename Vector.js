export default class Vector {
  constructor(a, b, id) {
    this._a = a;
    this._b = b;
    this._id = id;
  }

  get a() {
    return this._a;
  }

  set a(value) {
    this._a = value;
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}
