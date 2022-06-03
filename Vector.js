import Point3D from "./Point3D.js";

export default class Vector {
  constructor(a, b) {
    this._a = a;
    this._b = b;
    this._x = b.x - a.x;
    this._y = b.y - a.y;
    this._z = b.z - a.z;
  }

  static create(x, y, z) {
    let result = new Vector(new Point3D(0, 0, 0), new Point3D(x, y, z));
    result.x = x;
    result.y = y;
    result.z = z;
    return result;
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

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  get z() {
    return this._z;
  }

  set z(value) {
    this._z = value;
  }

  static normalize(v) {
    const magnitude = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    return Vector.create(v.x / magnitude, v.y / magnitude, v.z / magnitude);
  }

  static dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  static cross(v1, v2) {
    return Vector.create(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }

  static cos(v1, v2) {
    const v1Len = Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
    const v2Len = Math.sqrt(v2.x * v2.x + v2.y * v2.y + v2.z * v2.z);
    return Vector.dot(v1, v2) / (v1Len * v2Len);
  }

  static getReboundVector(n, light) {
    const t =
      -(n.x * light.x + n.y * light.y + n.z * light.z) /
      (n.x * n.x + n.y * n.y + n.z * n.z);
    const newX = -(2 * (light.x + t * n.x) - light.x);
    const newY = -(2 * (light.y + t * n.y) - light.y);
    const newZ = -(2 * (light.z + t * n.z) - light.z);
    return Vector.create(newX, newY, newZ);
  }
}
