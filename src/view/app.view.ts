import HeaderView from './header.view';
import FiltersView from './filters.view';

class AppView {
  header;

  filters;

  constructor() {
    this.header = new HeaderView();
    this.filters = new FiltersView();
  }

  init() {
    this.header.render();
    this.filters.render();
  }
}

export default AppView;
