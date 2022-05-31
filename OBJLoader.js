import Cuboid from "./Cuboid.js";
import Object3D from "./Object3D.js";
import Point3D from "./Point3D.js";
import Polygon from "./Polygon.js";
import Vector from "./Vector.js";

export default class OBJLoader {
  constructor(fileContent, color) {
    this.fileContent = fileContent;
    this.color = color;
  }

  load() {
    let lines = this.fileContent.split(/\r?\n/);
    const points = [];
    const polygons = [];

    let counter = 1;
    let pointCounter = 1;
    let vectorPointCounter = 1;

    lines.forEach((line) => {
      if (line.startsWith("v")) {
        const lineSplitted = line.split(/[ ,]+/);
        points.push(
          new Point3D(lineSplitted[1], lineSplitted[2], lineSplitted[3], pointCounter++)
        );
      }

      if (line.startsWith("f")) {
        const lineSplitted = line.split(/[ ,]+/);
        polygons.push(
          new Polygon(
            [
              new Vector(
                new Point3D(points[lineSplitted[1] - 1].x, points[lineSplitted[1] - 1].y, points[lineSplitted[1] - 1].z, vectorPointCounter++),
                new Point3D(points[lineSplitted[2] - 1].x, points[lineSplitted[2] - 1].y, points[lineSplitted[2] - 1].z, vectorPointCounter++),
                counter++
              ),
              new Vector(
                new Point3D(points[lineSplitted[2] - 1].x, points[lineSplitted[2] - 1].y, points[lineSplitted[2] - 1].z, vectorPointCounter++),
                new Point3D(points[lineSplitted[3] - 1].x, points[lineSplitted[3] - 1].y, points[lineSplitted[3] - 1].z, vectorPointCounter++),
                counter++
              ),
              new Vector(
                new Point3D(points[lineSplitted[3] - 1].x, points[lineSplitted[3] - 1].y, points[lineSplitted[3] - 1].z, vectorPointCounter++),
                new Point3D(points[lineSplitted[1] - 1].x, points[lineSplitted[1] - 1].y, points[lineSplitted[1] - 1].z, vectorPointCounter++),
                counter++
              ),
            ],
            this.color
          )
        );
      }
    });

    return new Object3D(polygons);
  }
}
