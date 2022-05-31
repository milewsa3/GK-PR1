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

    lines.forEach((line) => {
      if (line.startsWith("v")) {
        const lineSplitted = line.split(/[ ,]+/);
        points.push(
          new Point3D(lineSplitted[1], lineSplitted[2], lineSplitted[3])
        );
      }

      if (line.startsWith("f")) {
        const lineSplitted = line.split(/[ ,]+/);
        polygons.push(
          new Polygon(
            [
              new Vector(
                points[lineSplitted[1] - 1],
                points[lineSplitted[2] - 1]
              ),
              new Vector(
                points[lineSplitted[2] - 1],
                points[lineSplitted[3] - 1]
              ),
              new Vector(
                points[lineSplitted[3] - 1],
                points[lineSplitted[1] - 1]
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
