

const createStore = function (reducer, initialState) {
  const listeners = [];
  let state = initialState;
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listner) => listner(state));
  };
  const subscribe = (listener) => {
    listener && listener.constructor === Function && listeners.push(listener);
  };
  const connect = (mapStateToProps = () => {}, mapDispatchToProps)  => {
    return (Component) => {
     return Component({...state, ...mapDispatchToProps(dispatch)})
    }
  }
  return {
    getState,
    dispatch,
    subscribe,
    connect
  };
};

export default createStore;