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
import renderer from "react-test-renderer"

describe("Welcome", () => {

  it("renders correctly", () => {
    const tree = renderer.create(
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
  

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

})