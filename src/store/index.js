import { loadState } from 'utils/loadState';
import reducer from './reducer';
import { initialState } from './initialState';

export const store = {
  _state: loadState() ?? initialState,
  _subscribers: [],
  _callSubscribers() {
    if (!this._subscribers.length) console.log('no subcribers');
    this._subscribers.forEach((sub) => {
      sub(this._state);
    });
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscribers.push(observer);
  },
  dispatch(action) {
    this._state.books = reducer(this._state.books, action);

    this._callSubscribers();
  },
};

window.store = store;
