import debug from 'debug'

/*global debug*/
export default class Logger {
	constructor(ns){
		this.ns = ns;
	}
	getLogger(name){
		return debug(`${this.ns}:${name}`);
	}
}
