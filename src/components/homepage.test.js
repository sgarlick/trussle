import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import {Homepage} from './homepage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.flushPromises = () => {
	return new Promise(resolve => setImmediate(resolve))
}

describe('Homepage renders', () => {
   const homepage = mount((<Homepage path="/"/>));
    expect(homepage.exists()).toBe(true);
});

test("Is the Input being captured?",() =>{
  const homepage = mount((<Homepage path={null}/>));
  homepage.find("input").simulate("change", {
        target: { value: "13 27 26 5"}
      });
  expect(homepage.find("input").props().value).toEqual("13 27 26 5");
});

test("Is the input state updated?",() =>{
  const homepage = mount((<Homepage path={null}/>));
  homepage.find("input").simulate("change", {
        target: { value: "13 27 26 5"}
      });
  expect(homepage.state('input')).toEqual("13 27 26 5");
});

// Test for:
    // 13 27 26 5
    // 432 21 19 5832 5 135 14 6561 59049 15 486 275562 - MAZE
    // 20 486 21 513 19 324 5 21924 540 135 3 8
    // 8 5 324 8748 295245 730 23 405 13122 12 108


// const requestModule  = require('supertest');
// const app = require('../../server/index.js') // Link to your server file
// const req = requestModule(app);

// it('gets the test endpoint', async done => {
//   const response = await req.get('http://localhost:3001/trussle/server?message=1')

//   expect(response.status).toBe(200)
//   expect(response.body.message).toBe('pass!')
//   done()
// })