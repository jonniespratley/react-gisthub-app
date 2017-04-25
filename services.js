const GITHUB_CLIENT_ID_DEV = '3ba1dd5135e30e807627';
const GITHUB_CLIENT_SECRET_DEV = '43fde17f66082ef72237f44eb6a26751b618a4dd';
const GITHUB_CLIENT_ID = GITHUB_CLIENT_ID_DEV || '6b070b302956750a3c37';
const GITHUB_CLIENT_SECRET = GITHUB_CLIENT_SECRET_DEV || 'f931b4d0ebde3d1f4d8f30b98be620f831e8c2ac';

import axios from 'axios'
import Utils from './utils'


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
    getGists: (username, params) => {
        log('getGists', username);
        let url = (username ? `https://api.github.com/users/${username}/gists` : 'https://api.github.com/gists');
        return request(url, {params: params}).then(resp => resp.data);
    },
    getGist: (id) => {
        log('getGist', id);
        return request(`https://api.github.com/gists/${id}`).then(resp => resp.data);
    },
    getRawContents(url) {
        return fetch(url).then(resp => resp.text().then(text => text));
    },
    getAccessToken: (code, state) => {
        let params = {
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            code: code,
            state: state,
            scope: 'gist,user:email'
        };
        let gitRequest = axios.request('https://github.com/login/oauth/access_token?', {
            params: params,
            method: 'POST',
            body: JSON.stringify(params),
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        log('getAccessToken', params);
        return gitRequest.then((resp) => {
            log('getAccessToken', resp);
            return resp;
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
