import headerView from './header.view';
import mainView from './main.view';
import footerView from './footer.view';
import mainModel from '../model/main.model';
import productsView from './products.view';
import headerModel from '../model/header.model';

// import asideView from './aside.view';

type Layout = {
  header: HTMLElement;
  main: HTMLElement;
  footer: HTMLElement;
};

class AppView {
  layout = {} as Layout;

  init() {
    this.createLayout();
    this.render();
    this.subscribe();
  }

  subscribe() {
    // switch (state) {
    //   case 'main':
    //     productsView.render(this.layout.main);
    //     break;
    //   case 'products':
    //     mainView.render(this.layout.main);
    //     break;
    // }
    headerModel.on('update.path', () => mainView.render(this.layout.main));
    mainModel.on('update.path', () => productsView.render(this.layout.main));
  }

  render() {
    headerView.render(this.layout.header);
    productsView.render(this.layout.main);
    // mainView.render(this.layout.main);
    footerView.render(this.layout.footer);
  }

  createLayout() {
    const template = `<header class="header"></header>
    <main class="main"></main>
    <footer class="footer"> </footer>`;
    const root = document.getElementById('root');
    if (root) {
      root.insertAdjacentHTML('beforeend', template);
    }
    const header = document.querySelector('.header') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;
    const footer = document.querySelector('.footer') as HTMLElement;

    this.layout.header = header;
    this.layout.main = main;
    this.layout.footer = footer;
  }
}

export default new AppView();
