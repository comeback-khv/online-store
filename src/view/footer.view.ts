class FooterView {
  private createLayout() {}

  render(root: HTMLElement) {
    const template = `<p class="footer__copyright">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>`;
    if (root) root.insertAdjacentHTML('beforeend', template);
  }
}

export default new FooterView();
