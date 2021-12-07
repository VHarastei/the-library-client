export const saveState = (state) => {
  try {
    const serializableState = JSON.stringify(state);
    window.localStorage.setItem('state', serializableState);
  } catch (err) {
    console.log('Redux was not able to persist the state into the localstorage');
  }
};
