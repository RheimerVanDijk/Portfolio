import { createStore, action, createTypedHooks } from 'easy-peasy';

const store = createStore({
  lastPageNumber: 0,
  setPageNumber: action((state: any, payload) => {
    state.lastPageNumber = payload;
  }),
});

export default store;
