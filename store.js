/*global PouchDB*/
import Logger from './logger'
const log = new Logger('gisthub').getLogger('Store');

export default class Store {
  constructor(type, options){
    this.ns = 'gisthub';
    //this.db = new PouchDB(this.ns, options);
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

  put(){
    log('put', arguments);
    return this.db.put(arguments);
  }
  get(){
    log('get', arguments);
    return this.db.get(arguments);
  }

  fetch(){
    log('fetch', arguments);
    return this.db.allDocs(arguments);
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
  getKey(key){
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
