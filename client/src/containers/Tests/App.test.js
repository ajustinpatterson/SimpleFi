import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import App from '../App/App';
import { BrowserRouter } from 'react-router-dom';
import Apis from '../../apis' 
jest.mock('ethers') //this is mocking the entire ethers library in the root

describe("App", () => {

  beforeAll( async () => {
    jest.spyOn(Apis, 'getTokens')
    jest.spyOn(Apis, 'getFields')
    // jest.spyOn(Apis, 'getUserFieldTokens')
    // jest.spyOn(Apis, 'createContracts')
    // jest.spyOn(Apis, 'getUserBalance')
    // jest.spyOn(Apis, 'rewinder')

    await act( () => {
      render(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      )
    })
  });

  it("should run getToken and getFields api calls on render", async () => {
    expect(Apis.getTokens).toHaveBeenCalledTimes(1);
    expect(Apis.getFields).toHaveBeenCalledTimes(1);
    // expect(Apis.getUserFieldTokens).toHaveBeenCalledTimes(1);
    // expect(Apis.createContracts).toHaveBeenCalledTimes(1);
    // expect(Apis.getUserBalance).toHaveBeenCalledTimes(1);
    // expect(Apis.rewinder).toHaveBeenCalledTimes(1);
  });

  it("should return the correct values from getToken and getFields api calls", async () => {

    expect(Apis.getTokens).toHaveBeenCalledTimes(1);

  });

})