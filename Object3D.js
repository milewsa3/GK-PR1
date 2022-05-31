export default class Object3D {
  constructor(polygons) {
    this._polygons = polygons
  }

  get polygons() {
    return this._polygons;
  }
}