import attrs from "./attrs";

const setStorage = item =>
  localStorage.setItem(attrs.storage, JSON.stringify(item));

const getStorage = () => JSON.parse(localStorage.getItem(attrs.storage));

const clearStorage = () => localStorage.removeItem(attrs.storage);

export default {
  set: setStorage,
  get: getStorage,
  clear: clearStorage
};
