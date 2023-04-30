import AppView from './view/app.view';

class App {
  appView;

  constructor() {
    this.appView = new AppView();
  }

  start() {
    this.appView.init();
  }
}

export default App;
