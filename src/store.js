import Logger from './logger'
const log = new Logger('gisthub').getLogger('Store');

export default class Store {
  constructor(type){
    this.ns = 'gisthub';
    this._data = {};
    if(type === 'session'){
	    this.store = window.sessionStorage;
    } else {
      this.store = window.localStorage;
    }
    log('constructor', this);
  }
  clear(){
    log('clear', this);
    this.store.clear();
  }
  set(key, value){
    return new Promise((resolve, reject) =>{
      log('set', key, value);
      key = `${this.ns}:${key}`
      this._data[key] = value;
      try {
        this.store.setItem(key, JSON.stringify((value)));
        resolve(value);
      } catch (e) {
        log('set.error', e);
        reject(e);
      }
    });
  }
  get(key){
    return new Promise((resolve, reject) =>{
      key = `${this.ns}:${key}`
      try {
        log('get', key);
        if(this.store.getItem(key)){
          resolve(JSON.parse(this.store.getItem(key)));
        }else {
          reject({error_message: `Key ${key} not found in storage`})
        }

      } catch (e) {
        log('get.error', e);
        reject(e);
      }
    });
  }
  remove(key){
    return new Promise((resolve, reject) =>{
      log('remove', key);
      delete this._data[key]
      return this.store.removeItem(key);
    });
  }
}
