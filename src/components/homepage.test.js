import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import {Homepage} from './homepage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const homepage = mount((<Homepage path="/"/>));

describe('Homepage renders', () => {
    expect(homepage.exists()).toBe(true);
});

test("Is the Input being captured?",() =>{
  homepage.find("input").simulate("change", {
        target: { value: "13 27 26 5"}
      });
  expect(homepage.find("input").props().value).toEqual("13 27 26 5");
});

test("Is the input state updated?",() =>{
  homepage.find("input").simulate("change", {
        target: { value: "13 27 26 5"}
      });
  expect(homepage.state('input')).toEqual("13 27 26 5");
});


const app = require('../../server/index.js'); // Link to server file
const supertest = require('supertest')
const request = supertest(app)

it('check the value of 13 27 26 5', async done => {
  // Sends GET Request to /test endpoint
  const res = await request.get('/trussle/server?message=13 27 26 5')
  expect(res.status).toBe(200);
  expect(res.body.decoded.join("")).toBe("MAZE");
  done()
})

it('check the value of 432 21 19 5832 5 135 14 6561 59049 15 486 275562', async done => {
  // Sends GET Request to /test endpoint
  const res = await request.get('/trussle/server?message=432 21 19 5832 5 135 14 6561 59049 15 486 275562')
  expect(res.status).toBe(200);
  expect(res.body.decoded.join("")).toBe("PUSHEENICORN");
  done()
})

it('check the value of 20 486 21 513 19 324 5 21924 540 135 3 8', async done => {
  // Sends GET Request to /test endpoint
  const res = await request.get('/trussle/server?message=20 486 21 513 19 324 5 21924 540 135 3 8')
  expect(res.status).toBe(200);
  expect(res.body.decoded.join("")).toBe("TRUSSLE TECH");
  done()
})

it('check the value of 8 5 324 8748 295245 730 23 405 13122 12 108', async done => {
  // Sends GET Request to /test endpoint
  const res = await request.get('/trussle/server?message=8 5 324 8748 295245 730 23 405 13122 12 108')
  expect(res.status).toBe(200);
  expect(res.body.decoded.join("")).toBe("HELLO WORLD");
  done()
})
