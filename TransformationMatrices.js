export const transformationMatrices = {
  translate: (x, y, z) => {
    let result = math.identity(4);
    result.subset(math.index(0, 3), x);
    result.subset(math.index(1, 3), y);
    result.subset(math.index(2, 3), z);
    return result;
  },
  rotateOY: (deg) => {
    let result = math.zeros(4, 4);
    result.subset(math.index(0, 0), math.cos(math.unit(deg, "deg")));
    result.subset(math.index(1, 1), 1);
    result.subset(math.index(2, 0), -math.sin(math.unit(deg, "deg")));
    result.subset(math.index(0, 2), math.sin(math.unit(deg, "deg")));
    result.subset(math.index(2, 2), math.cos(math.unit(deg, "deg")));
    result.subset(math.index(3, 3), 1);
    return result;
  },
  rotateOX: (deg) => {
    let result = math.zeros(4, 4);
    result.subset(math.index(0, 0), 1);
    result.subset(math.index(1, 1), math.cos(math.unit(deg, "deg")));
    result.subset(math.index(1, 2), -math.sin(math.unit(deg, "deg")));
    result.subset(math.index(2, 1), math.sin(math.unit(deg, "deg")));
    result.subset(math.index(2, 2), math.cos(math.unit(deg, "deg")));
    result.subset(math.index(3, 3), 1);
    return result;
  },
  rotateOZ: (deg) => {
    let result = math.zeros(4, 4);
    result.subset(math.index(0, 0), math.cos(math.unit(deg, "deg")));
    result.subset(math.index(1, 1), math.cos(math.unit(deg, "deg")));
    result.subset(math.index(0, 1), -math.sin(math.unit(deg, "deg")));
    result.subset(math.index(1, 0), math.sin(math.unit(deg, "deg")));
    result.subset(math.index(2, 2), 1);
    result.subset(math.index(3, 3), 1);
    return result;
  },
  scale: (value) => {
    let result = math.zeros(4, 4);
    result.subset(math.index(0, 0), value);
    result.subset(math.index(1, 1), value);
    result.subset(math.index(2, 2), value);
    result.subset(math.index(3, 3), 1);
    return result;
  },
};
