import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App/App';
import { BrowserRouter } from 'react-router-dom';
import Apis from '../../apis' 
jest.mock('ethers') //this is mocking the entire ethers library in the root
jest.mock('../../apis')
configure({adapter: new Adapter()});


describe("App", () => {

  const gotTokens = 'tokens'

  beforeAll( async () => {
    jest.spyOn(Apis, 'getTokens')
    jest.spyOn(Apis, 'getFields')

    Apis.getTokens.mockResolvedValue(gotTokens)
    await act( () => {
      const wrapper = render(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      )
    })
  });

  it("should run getToken and getFields api calls on render", async () => {
    expect(Apis.getTokens).toHaveBeenCalledTimes(1);
    expect(Apis.getFields).toHaveBeenCalledTimes(1);
  });

  it("should return the correct values from getToken and getFields api calls", async () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state('trackedTokens')).toBe(gotTokens);

  });

})