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
jest.mock('ethers')

describe("App", () => {

  beforeAll(() => {
    jest.spyOn(Apis, 'getTokens')
  });

  it("should correctly update states after receiving the database get requests for fields and tokens", async () => {
    await act( () => {
      render(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      )
    })

    expect(Apis.getTokens).toHaveBeenCalledTimes(1);

  });


})