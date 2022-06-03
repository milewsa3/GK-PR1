import Controller from "./Controller.js";
import Scene from "./Scene.js";
import OBJLoader from "./OBJLoader.js";

function readObjectFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = e => {
    let loader = new OBJLoader(e.target.result, 'green')
    let loadedObject = loader.load()
    new Controller(new Scene("canvas", [loadedObject])).run()
  };
  reader.readAsText(file);
}

document
      .getElementById("file-input")
      .addEventListener("change", readObjectFile, false);

let scene = new Scene("canvas", []);
let controller = new Controller(scene);

controller.run();
