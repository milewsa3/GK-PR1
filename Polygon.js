import Point3D from "./Point3D.js";
import Vector from "./Vector.js";
import Light from "./Light.js";

export default class Polygon {
  constructor(vectors, baseColor) {
    this._vectors = vectors;
    this._baseColor = baseColor;
    this._color = baseColor;

    this.setPoints();
  }

  get baseColor() {
    return this._baseColor;
  }

  get color() {
    return this._color;
  }

  get vectors() {
    return this._vectors;
  }

  get points() {
    return this._points;
  }

  setPoints() {
    this._points = this.vectors.reduce((points, vector) => {
      points.push(vector.a);
      return points;
    }, []);
  }

  distanceToObserver() {
    let avr = new Point3D(
      this.sumCoordinates("x") / this.points.length,
      this.sumCoordinates("y") / this.points.length,
      this.sumCoordinates("z") / this.points.length
    );

    return Math.sqrt(
      Math.pow(avr.x, 2) + Math.pow(avr.y, 2) + Math.pow(avr.z, 2)
    );
  }

  sumCoordinates(coordinate) {
    return this.points.reduce((sum, point) => {
      return (sum += point[coordinate]);
    }, 0);
  }

  maxZ() {
    return Math.max(...this.points.map((p) => p.z));
  }

  minZ() {
    return Math.min(...this.points.map((p) => p.z));
  }

  updateColor(light) {
    const p1 = this._points[0];
    const p2 = this._points[1];
    const p3 = this._points[2];
    const v1 = new Vector(p2.clone(), p1.clone());
    const v2 = new Vector(p2.clone(), p3.clone());
    const normal = Vector.normalize(Vector.cross(v1, v2));
    const dot = Vector.dot(normal, light);
    let cos = 0;
    if (dot > 0.15) {
      cos = Math.pow(
        Vector.cos(
          new Vector(p1.clone(), new Point3D(0, 0, 0)),
          Vector.getReboundVector(normal, light.b)
        ),
        Light.N
      );
    }
    let lightRatio =
      Light.IP * (Light.KD * dot + Light.KS * cos) + Light.AMBIENT;
    lightRatio = Math.max(Light.MIN, Math.min(Light.MAX, lightRatio));
    this._color = `rgb(${parseInt(60 * lightRatio)}, ${parseInt(
      179 * lightRatio
    )}, ${parseInt(113 * lightRatio)})`;
  }
}
