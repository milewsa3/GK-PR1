export default class PaintersAlgorithm {
  static compare(polygon1, polygon2) {
    console.log(polygon1)
    const p1 = polygon1.points[0]
    const p2 = polygon1.points[1]
    const p3 = polygon1.points[2]

    console.log('X', p2.x)
    console.log('Y', p2.y)
    console.log('Z', p2.z)
    const A = (p2.y - p1.y) * (p3.z - p1.z) - (p2.z - p1.z) * (p3.y - p1.y)
    const B = (p2.z - p1.z) * (p3.x - p1.x) - (p2.x - p1.x) * (p3.z - p1.z)
    const C = (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x)
    const D = -A * p1.x - B * p1.y - C * p1.z

    const pointsToCheck = polygon2.points
    const firstPoint = pointsToCheck[0]
    const result = firstPoint.x * A + firstPoint.y * B + firstPoint.z * C + D
    for(let i = 1; i < pointsToCheck.length; i++) {
      const point = pointsToCheck[i]
      const nextResult = point.x * A + point.y * B + point.Z * C + D
      if (nextResult * result < 0) {
        return this.compare(polygon2, polygon1)
      }
    }

    console.log('Result', result)
    console.log('D', D)
    return -D * result

    // if (p1.maxZ() < p2.minZ()) {
    //   return 1;
    // }

    // if (p1.distanceToObserver() > p2.distanceToObserver()) {
    //   return -1;
    // }

    // if (p1.distanceToObserver() < p2.distanceToObserver()) {
    //   return 1;
    // } else {
    //   return 0;
    // }
  }
}