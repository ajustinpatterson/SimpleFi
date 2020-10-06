import React, {useState} from "react";
import {
  act,
  render
} from "@testing-library/react";
import App from '../App/App';
import { BrowserRouter } from 'react-router-dom';
import Apis from '../../apis' 
jest.mock('ethers') //this is mocking the entire ethers library in the root
jest.mock('../../apis')
import { shallow, mount } from 'enzyme';

describe("App", () => {

  const gotTokens = 'tokens'
  
  beforeAll( async () => {
    jest.spyOn(Apis, 'getTokens')
    jest.spyOn(Apis, 'getFields')
    jest.spyOn(Apis, 'createContracts')

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
  });

  it("should call setTrackedTokens, setTrackedFields and setAllTrackedLoaded", async () => {
    expect(Apis.createContracts).toHaveBeenCalledTimes(2);
  })


// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

   // const wrapper = mount(
    //   <BrowserRouter>
    //     <App trackedTokens={gotTokens}/>
    //   </BrowserRouter>);
    // const appInstance = wrapper.instance();
    // expect(appInstance.state.trackedTokens).toBe(gotTokens);

  // it("should call setTrackedTokens, setTrackedFields and setAllTrackedLoaded", async () => {
  //   const setTrackedTokens = jest.fn()
  //   // const add = jest.fn()
  //   // jest.spyOn(App, 'add')
  //   const useStateSpy = jest.spyOn(React, 'useState')
  //   useStateSpy.mockImplementation((trackedTokens) => [trackedTokens, setTrackedTokens])
  //   // jest.spyOn(App, 'setTrackedTokens')
  //   // jest.spyOn(useState, 'connectWallet')
    
  //   await act( async () => {
  //     await render(
  //       <BrowserRouter>
  //         <App/>
  //       </BrowserRouter>
  //     )
  //   })
    
  //   await expect(setTrackedTokens).toHaveBeenCalledTimes(1)
  //   // expect(add).toHaveBeenCalledTimes(1)
  //   // expect(screen.getByText('3')).toBeInTheDocument();
  //   // await expect(setTrackedFields).toHaveBeenCalledTimes(1)
  // });

})