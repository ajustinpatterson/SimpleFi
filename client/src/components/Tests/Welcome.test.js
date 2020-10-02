import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Welcome from "../Welcome/Welcome"
import '@testing-library/jest-dom/extend-expect'

describe("Welcome", () => {
  it("loads the page content", () => {
    render(
      <BrowserRouter>
        <Welcome/>
      </BrowserRouter>
    );

    expect(screen.getByText("Decentralised finance investing made easy!")).toBeInTheDocument();
  })
  

  // it("routes to the wallet dashboard when the connect wallet button is clicked")
  



  it("runs the connect prop a single time when the Link element is clicked", () => {
    const onClick = jest.fn()
    render(
      <BrowserRouter>
        <Welcome connect={onClick}/>
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText(/connect wallet/i))

    expect(onClick).toHaveBeenCalledTimes(1);
  })

  // it("alerts that you do not have a Metamask account if it is not installed")
})