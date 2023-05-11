class FooterView {
  private createLayout() {}

  render(root: HTMLElement) {
    const template = `<div class="container footer__container">
        <p class="footer__copyright">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
        </div>`;
    if (root) root.insertAdjacentHTML('beforeend', template);
  }
}

export default new FooterView();
