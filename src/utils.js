import Logger from './logger'
import axios from 'axios'
const NS = 'gisthub';



let Utils = {};
Utils.request = axios.request;
Utils.getLogger = (name) => {
  return new Logger(NS).getLogger(name);
};

const log = Utils.getLogger('utils');
Utils.serialize = (obj) =>{
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
Utils.getQueryVariable = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  log('Query variable %s not found', variable);
  return false;
}

export default Utils
