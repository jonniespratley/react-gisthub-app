const GITHUB_CLIENT_ID_DEV = '3ba1dd5135e30e807627';
const GITHUB_CLIENT_SECRET_DEV = '43fde17f66082ef72237f44eb6a26751b618a4dd';
const GITHUB_CLIENT_ID = GITHUB_CLIENT_ID_DEV || '6b070b302956750a3c37';
const GITHUB_CLIENT_SECRET = GITHUB_CLIENT_SECRET_DEV || 'f931b4d0ebde3d1f4d8f30b98be620f831e8c2ac';
const GITHUB_REDIRECT_URI = '';
import axios from 'axios'
import Store from './store'
import Utils from './utils'
//import GistService from './services/gist-service'

let cache = new Store('localStorage');
const log = Utils.getLogger('services');

async function getJson(url, options) {
    log('getJson', url, options);
    try {
        const res = await request(url, options)
        const data = await res.json()
        return data
    } catch (e) {
        log('request', 'error', e);
        throw e
    }
}
async function request(url, options) {
    log('request', url, options);
    try {
        const res = await axios.request(url, options)
        log('request', res.status, res.statusText, url, res);
        return res
    } catch (e) {
        log('request', 'error', e);
        throw e
    }
}

const Services = {
    request: request,
    getJson: getJson,
    getGithubLoginUrl: () => {
        return `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri&scope&state=login`
    },
    getGists: (username, options) => {
      if(!options){
        options = {
          params: {
            //page: 1,
            //per_page: 8
          }
        };
      }
        log('getGists', username, options);
        let url = (username ? `https://api.github.com/users/${username}/gists` : 'https://api.github.com/gists');
        return request(url, options)
          .then(resp => {
            console.log(resp.headers);
            return resp;
          })
          .then(resp => resp.data);
    },
    getGist: (id) => {
        log('getGist', id);
        return request(`https://api.github.com/gists/${id}`).then(resp => resp.data);
    },
    getRawContents(url) {
        return fetch(url).then(resp => resp.text().then(text => text));
    },
    getAccessToken: (code, state, redirect) => {
        let params = {
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            redirect_uri: redirect || GITHUB_REDIRECT_URI,
            code: code,
            state: state,
            scope: 'gist,user:email'
        };

        var gitHeaders = new Headers();
	   // gitHeaders.append('Content-Type', 'text/plain');
	    gitHeaders.append('Accept', 'application/json');

   		var url = 'https://github.com/login/oauth/access_token?' + Utils.serialize(params);
	    var req = new Request(url, {
	      method: 'POST',
	      mode: 'no-cors',
        body: params,
	      headers: gitHeaders
	    });

        log('getAccessToken', params);
        return fetch(req).then((resp) => {
            log('getAccessToken', resp);
            console.log(resp.headers.get('Content-Type'));
 console.log(resp.headers.get('Date'));

 console.log(resp.status);
 console.log(resp.statusText);
 console.log(resp.type);
 console.log(resp.url);
            return resp;
        })
        .then(function(response) {
    return response.text();
  })
      .then(function(text) {
        console.log('Request successful', text);
      })
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
