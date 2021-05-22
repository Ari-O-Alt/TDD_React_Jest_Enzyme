// import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import PersonList from "./Components/PersonList";

/* 
--------THIS IS THE INITIAL TEST THAT COMES WITH JEST WHEN WE USE CREATE REACT APP--------

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

// 1. CREATE A TEST THAT FAILS
// --- the keyword "describe" breaks your test suite into components
// --- a test suite is a collection of tests
describe("App", () => {
  // --- "it" signals the beginning of our (first) test
  it("", () => {
    const getAppComponentWrapper = shallow(<App />); // shallow only loads the App component, no children
  });

  it("renders a component called PersonList", () => {
    const getAppComponentWrapper = shallow(<App />);
    const personList = getAppComponentWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });
});
