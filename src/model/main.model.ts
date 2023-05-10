import { state } from '../store/state';
import { EventEmitter } from '../utils/event.emitter';

class MainModel extends EventEmitter {
  route(path: string) {
    state.path = path;
    this.emit('update.path');
  }
}

export default new MainModel();
