import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    // Chargement du sprite svg par le système d'icône
    Icons.load();
  }
}

new Main();
