import { decorate, observable } from "mobx";
import { observer } from "mobx-react";

const { Board } = require('pini');

class Store {
    @observable
    board = new Board();

    
}

const appStore = new Store();
export default appStore;