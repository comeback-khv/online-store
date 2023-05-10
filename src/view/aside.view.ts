class AsideView {
  root;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;
  }

  init() {
    this.render();
  }

  private createLayout() {
    return `      `;
  }

  render() {
    this.root.innerHTML += this.createLayout();
  }
}

export default new AsideView();
