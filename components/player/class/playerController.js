export class PlayerController {
    constructor(view, model) {
      this.view = view
      this.model = model

      this.model.selectPlayer('lenny');
      this.view.image.src = this.model.status.spritesheet; 
      this.view.image.className = this.model.status.walk;
    }
}

