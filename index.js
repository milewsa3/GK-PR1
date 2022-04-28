import Controller from "./Controller.js";
import Scene from "./Scene.js";
import Cuboid from "./Cuboid.js";

let cube1 = new Cuboid(25, -20, 50, 25, 25, 'black');
let cube2 = new Cuboid(-50, -20, 50, 25, 25, 'black');
let cuboid = new Cuboid(-45, -20, 105, 90, 40, 'red');
let scene = new Scene("canvas", [cube1, cube2, cuboid]);
let controller = new Controller(scene);

controller.run();
