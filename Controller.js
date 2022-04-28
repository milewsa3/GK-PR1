export default class Controller {
  constructor(scene) {
    this.scene = scene;
  }

  run() {
    window.requestAnimationFrame(this.scene.draw.bind(this.scene));

    document.addEventListener('keydown', (event) => {
      const keyName = event.key;

      if (keyName === 'w') {
        new Translation(this.scene.vectors).moveUp();
      }

      if (keyName === 's') {
        new Translation(this.scene.vectors).moveDown();
      }

      if (keyName === 'a') {
        new Translation(this.scene.vectors).moveLeft();
      }

      if (keyName === 'd') {
        new Translation(this.scene.vectors).moveRight();
      }

      if (keyName === 'e') {
        new Translation(this.scene.vectors).moveBack();
      }

      if (keyName === 'q') {
        new Translation(this.scene.vectors).moveForward();
      }

      if (keyName === 'ArrowLeft') {
        new Rotation(this.scene.vectors, -1).rotate('OX');
      }

      if (keyName === 'ArrowRight') {
        new Rotation(this.scene.vectors, 1).rotate('OX');
      }

      if (keyName === 'ArrowUp') {
        new Rotation(this.scene.vectors, 1).rotate('OY');
      }

      if (keyName === 'ArrowDown') {
        new Rotation(this.scene.vectors, -1).rotate('OY');
      }

      if (keyName === 'PageUp') {
        new Rotation(this.scene.vectors, 1).rotate('OZ');
      }

      if (keyName === 'PageDown') {
        new Rotation(this.scene.vectors, -1).rotate('OZ');
      }

      if (keyName === '=') {
        this.scene.zoomIn();
      }

      if (keyName === '-') {
        this.scene.zoomOut();
      }

      window.requestAnimationFrame(this.scene.draw.bind(this.scene));
    }, false);
  }
}
