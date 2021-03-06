import Transform from "./Transform.js";
import Cuboid from "./Cuboid.js";
import Scene from "./Scene.js";

export default class Controller {
  constructor(scene) {
    this.scene = scene;
  }

  run() {
    window.requestAnimationFrame(this.scene.draw.bind(this.scene));

    document.addEventListener(
      "keydown",
      (event) => {
        const keyName = event.key;

        if (keyName === "w") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).moveUp();
        }

        if (keyName === "s") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).moveDown();
        }

        if (keyName === "a") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).moveLeft();
        }

        if (keyName === "d") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).moveRight();
        }

        if (keyName === "e") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).moveBack();
        }

        if (keyName === "q") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).moveForward();
        }

        if (keyName === "ArrowLeft") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).rotateOX(1);
        }

        if (keyName === "ArrowRight") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).rotateOX(-1);
        }

        if (keyName === "ArrowUp") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).rotateOY(1);
        }

        if (keyName === "ArrowDown") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).rotateOY(-1);
        }

        if (keyName === "PageUp") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).rotateOZ(1);
        }

        if (keyName === "PageDown") {
          new Transform([...this.scene.vectors, this.scene.lightVector]).rotateOZ(-1);
        }

        if (keyName === "=") {
          this.scene.zoomIn();
        }

        if (keyName === "-") {
          this.scene.zoomOut();
        }

        window.requestAnimationFrame(this.scene.draw.bind(this.scene));
      },
      false
    );
  }
}
