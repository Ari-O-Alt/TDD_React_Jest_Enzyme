// import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import PersonList from "./Components/PersonList/PersonList";

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
  // --- test that checks if we have the App component
  // --- this is a test that runs before any other test, avoiding duplicate code since this is a common test for all tests
  let getAppComponentWrapper;
  beforeAll(() => {
    getAppComponentWrapper = shallow(<App />); // shallow only loads the App component, no children
  });

  // --- test that checks if the App component is rendering a PersonList component
  it("renders a component called PersonList", () => {
    const personList = getAppComponentWrapper.find(PersonList); // returns an array
    expect(personList).toHaveLength(1); // checks if we have exactly one component named PersonList
  });

  // --- test that checks is we have a state in our App component and for it not to be null
  it("renders a component called PersonList", () => {
    const appState = getAppComponentWrapper.state();
    expect(appState).not.toBeNull();
  });

  // --- test that checks if we have a propery called "people" in our state
  it("has a people property on state", () => {
    const appState = getAppComponentWrapper.state();
    expect(appState.people).toBeDefined();
  });

  it("passes the people prop pf the state as a prop to PersonList", () => {
    const personList = getAppComponentWrapper.find(PersonList); // we get the PersonList component

    expect(personList.props().people).toEqual(
      // we check if the props have a "people" value which is equal to the "people" in the App's component state
      getAppComponentWrapper.state().people
    );
  });
});
