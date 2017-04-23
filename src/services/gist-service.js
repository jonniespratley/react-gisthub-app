export default class GistService {
  static async request(opts) {
		console.log('GistService.request', opts);
    try {
      const res = await fetch(opts.url);
      const data = await res.json();
      return data;
    } catch (e) {
      throw e;
    }
  }
  static async getGists(username) {
    return this.request({
      method: 'GET',
      url: `https://api.github.com/users/${username}/gists`
    });
  }
  static async getGist(id) {
    return this.request({
      method: 'GET',
      url: `https://api.github.com/gists/${id}`
    });
  }
	static getRawContents(url){
		return fetch(url).then(resp => resp.text().then(text => text));
	}
}
