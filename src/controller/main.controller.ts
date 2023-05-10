import mainModel from '../model/main.model';

class MainController {
  route(path: string) {
    mainModel.route(path);
  }
}

export default new MainController();
