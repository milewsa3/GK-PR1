import { transformationMatrices } from "./TransformationMatrices.js";

export default class Transform {
  STEP = 2;
  ANGLE = 2; //deg

  constructor(vectors) {
    this.vectors = vectors;
  }

  process(transformationMatrix) {
    this.vectors.forEach((vector) => {
      let matrixA = vector.a.toMatrix();
      let matrixB = vector.b.toMatrix();

      let resultA = math.multiply(transformationMatrix, matrixA);
      let resultB = math.multiply(transformationMatrix, matrixB);

      vector.a.updateFromMatrix(resultA._data);
      vector.b.updateFromMatrix(resultB._data);
    });
  }

  moveUp() {
    this.process(transformationMatrices.translate(0, this.STEP, 0));
  }

  moveDown() {
    this.process(transformationMatrices.translate(0, -this.STEP, 0));
  }

  moveLeft() {
    this.process(transformationMatrices.translate(-this.STEP, 0, 0));
  }

  moveRight() {
    this.process(transformationMatrices.translate(this.STEP, 0, 0));
  }

  moveForward() {
    this.process(transformationMatrices.translate(0, 0, -this.STEP));
  }

  moveBack() {
    this.process(transformationMatrices.translate(0, 0, this.STEP));
  }

  rotateOX(direction) {
    this.process(transformationMatrices.rotateOX(direction * this.ANGLE));
  }

  rotateOY(direction) {
    this.process(transformationMatrices.rotateOY(direction * this.ANGLE));
  }

  rotateOZ(direction) {
    this.process(transformationMatrices.rotateOZ(direction * this.ANGLE));
  }
}
