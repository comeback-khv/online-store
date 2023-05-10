import { state } from '../store/state';
import { EventEmitter } from '../utils/event.emitter';

class HeaderModel extends EventEmitter {
  route(path: string) {
    state.path = path;
    this.emit('update.path');
  }
}

export default new HeaderModel();
