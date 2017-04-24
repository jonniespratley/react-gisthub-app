import React from 'react';
import Store from '../src/store';

describe('Store', ()=>{
  var instance = new Store();
  it('creates instance', (done) => {
    expect(instance);
    done();
  });
  it('get - returns value by key', () => {
  });
});
