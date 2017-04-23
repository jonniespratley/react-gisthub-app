export default class Store {
  constructor(type){
    this._data = {};
    if(type === 'session'){
	    this.store = window.sessionStorage;
    } else {
      this.store = window.localStorage;
    }

  }
  clear(){
    this.store.clear();
  }
  set(key, value){
    this._data[key] = value;
    return this.store.setItem(key, value);
  }
  get(key){
    return this.store.getItem(key);
  }
  remove(key){
    delete this._data[key]
    return this.store.removeItem(key);
  }
}
