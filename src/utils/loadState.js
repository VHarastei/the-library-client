export const loadState = () => {
  try {
    const serializableState = window.localStorage.getItem('state');
    return serializableState !== null || serializableState === undefined
      ? JSON.parse(serializableState)
      : undefined;
  } catch (error) {
    return undefined;
  }
};
