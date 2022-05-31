export default class Point3D {
  w = 1.0;

  constructor(x, y, z, id) {
    this._x = x;
    this._y = y;
    this._z = z;
    this.id = id;
  }

  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }

  get z() {
    return this._z;
  }

  set z(z) {
    this._z = z;
  }

  toMatrix() {
    return [this.x, this.y, this.z, this.w];
  }

  updateFromMatrix(matrix) {
    this.x = matrix[0];
    this.y = matrix[1];
    this.z = matrix[2];
    this.w = matrix[3];
  }
}
