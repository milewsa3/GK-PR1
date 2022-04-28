export default class Point3D {
  w = 1.0;

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
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
