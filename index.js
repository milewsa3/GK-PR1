import Controller from "./Controller.js";
import Scene from "./Scene.js";
import Cuboid from "./Cuboid.js";

// let paper1 = new Cuboid(-10, -20, 105, 1, 90, "red");
let paper2 = new Cuboid(-40, -40, 90, 90, 90, 5, "yellow");
let paper3 = new Cuboid(10, -20, 105, 90, 90, 5, "blue");
let paper1 = new Cuboid(10, -80, 120, 90, 90, 5, "red");
let scene = new Scene("canvas", [paper2, paper3, paper1]);
let controller = new Controller(scene);

controller.run();
