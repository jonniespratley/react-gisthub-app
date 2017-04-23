const GITHUB_CLIENT_ID_DEV = '3ba1dd5135e30e807627';
const GITHUB_CLIENT_SECRET_DEV = '43fde17f66082ef72237f44eb6a26751b618a4dd';
const GITHUB_CLIENT_ID = GITHUB_CLIENT_ID_DEV || '6b070b302956750a3c37';
const GITHUB_CLIENT_SECRET = GITHUB_CLIENT_SECRET_DEV || 'f931b4d0ebde3d1f4d8f30b98be620f831e8c2ac';

import Utils from './utils'
//import GistService from './services/gist-service'

let cache = {};
const log = Utils.getLogger('services');
const serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

async function getJson(url, options) {
  log('getJson', url, options);
  if(cache[url]){
    log('getJson', 'returning cache');
    return cache[url];
  }

  try {
    const res = await request(url, options)
    const data = await res.json()
    cache[url] = data;
    return data
  } catch (e) {
    log('request', 'error', e);
    throw e
  }
}
async function request(url, options) {
  log('request', options);
  try {
    const res = await fetch(url, options)

    return res
  } catch (e) {
    log('request', 'error', e);
    throw e
  }
}

const Services = {
  request: request,
  getJson: getJson,
  getGists: (username) => {
    log('getGists', username);
    let url = (username ? `https://api.github.com/users/${username}/gists` : 'https://api.github.com/gists');
    //return new Promise(resolve => resolve(mocks));
    /*return fetch()
      .then(resp => (resp.json().then(json => json)));*/
    return getJson(url);
  },

  getGist: (id) => {
    log('getGist', id);
    return getJson(`https://api.github.com/gists/${id}`);
  },
  getRawContents(url) {
    return fetch(url).then(resp => resp.text().then(text => text));
  },
  getAccessToken: (code, state) => {
    let params = {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code: code,
      state: state
    };
    let gitHeaders = new Headers();
    gitHeaders.append('Content-Type', 'application/json');
    gitHeaders.append('Accept', 'application/json');

    let gitRequest = request('https://github.com/login/oauth/access_token?' + serialize(params), {
      method: 'POST',
      mode: 'no-cors',
      //body: JSON.stringify(params),
      headers: gitHeaders
    });
    log('getAccessToken', params);

    return gitRequest
      .then(function(response) {
        console.warn('getAccessToken.response', response);
			response.text().then(function (text) {
  			// do something with the text response
				console.log('response.text', text);
			});

        var contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then(function(json) {
            // process your JSON further
            console.log('json', json);
            return json;
          });
        } else {
          console.log("Oops, we haven't got JSON!");
        }
      })
      .catch(function(error) {
        console.error(error);
        return error;
      });
  },
  getUserInfo: (token) => {

    console.log('GetUserInfo', token);
    return request('/user', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
  }
};

export default Services;
