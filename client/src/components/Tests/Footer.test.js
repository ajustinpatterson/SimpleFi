import React from "react";
import renderer from "react-test-renderer"
import Footer from "../Footer/Footer";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';


it ("renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();

});