import React from "react";
import {
  act,
  render,
  wait,
  cleanup,
  screen
} from "@testing-library/react";
import TokenCell from '../TokenCell/TokenCell'


describe("TokenCell", () => {


  const content = 'testcontent'
  const index = 0 
  const currencyCells = [true]

  it("displays only right values for the content when the header is false", () => {
    render(<TokenCell header={false} content={content} index={index} currencyCells={currencyCells} />);
    expect(screen.getByText(`$${content}`)).toBeInTheDocument();

  });

  it("displays only right values for the content when the header is true", () => {
    render(<TokenCell header={true} content={content} index={index} currencyCells={currencyCells} />);
    expect(screen.getByText(content)).toBeInTheDocument();

  });

})