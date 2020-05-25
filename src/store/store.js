
import {createStore} from 'redux';

import ligarDesligar from '../reducers/ligarDesligar';

export let store = createStore(ligarDesligar);