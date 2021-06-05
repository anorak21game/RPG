export class PlayerController {
    constructor(view, model) {
      this.view = view
      this.model = model

      this.view.image.src = this.model.spritesheet; 
      this.view.image.className = this.model.walk;
    }
}

