import Controller from "./Controller.js";
import Scene from "./Scene.js";
import Cuboid from "./Cuboid.js";
import OBJLoader from "./OBJLoader.js";

function readObjectFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (e) {
    let loader = new OBJLoader(e.target.result, 'green')
    let loadedObject = loader.load()
    new Controller(new Scene("canvas", [loadedObject])).run()
  };
  reader.readAsText(file);
}

document
      .getElementById("file-input")
      .addEventListener("change", readObjectFile, false);

// let paper2 = new Cuboid(-40, -40, 90, 40, 90, 5, "yellow");
// let paper3 = new Cuboid(10, -20, 105, 90, 90, 5, "blue");
// let paper1 = new Cuboid(10, -80, 120, 90, 90, 5, "red");
let scene = new Scene("canvas", []);
let controller = new Controller(scene);

controller.run();
